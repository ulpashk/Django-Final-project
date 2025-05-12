from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer, LoginSerializer, RoleRequestSerializer, UserSerializer
from .models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth import authenticate
import pyotp


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(get_tokens_for_user(user), status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class LoginView(APIView):
#     def post(self, request):
#         serializer = LoginSerializer(data=request.data)
#         if serializer.is_valid():
#             return Response(get_tokens_for_user(serializer.validated_data), status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data

            if user.otp_enabled:
                otp_code = request.data.get("otp")
                if not otp_code:
                    return Response(
                        {"detail": "OTP code required."}, status=status.HTTP_401_UNAUTHORIZED
                    )

                totp = pyotp.TOTP(user.otp_base32)
                if not totp.verify(otp_code):
                    return Response(
                        {"detail": "Invalid OTP code."}, status=status.HTTP_401_UNAUTHORIZED
                    )

                user.otp_verified = True
                user.save()

            return Response(get_tokens_for_user(user), status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def enable_2fa(request):
    user = request.user
    if user.otp_enabled:
        return Response({"detail": "2FA already enabled."}, status=400)

    otp_secret = pyotp.random_base32()
    totp = pyotp.TOTP(otp_secret)
    otp_auth_url = totp.provisioning_uri(name=user.email, issuer_name="MyApp")

    user.otp_base32 = otp_secret
    user.otp_auth_url = otp_auth_url
    user.otp_enabled = True
    user.otp_verified = False
    user.save()

    return Response({
        "otp_auth_url": otp_auth_url,
        "otp_base32": otp_secret,
        "message": "Scan this URL with your authenticator app.",
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def disable_2fa(request):
    user = request.user
    user.otp_enabled = False
    user.otp_verified = False
    user.otp_base32 = None
    user.otp_auth_url = None
    user.save()
    return Response({"detail": "2FA disabled."})


class RoleRequestView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RoleRequestSerializer

    def get_object(self):
        return self.request.user

    def perform_update(self, serializer):
        serializer.save(is_role_approved=False, role_rejection_reason=None)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def list_role_requests(request):
    pending_users = User.objects.filter(requested_role__isnull=False, is_role_approved=False)
    data = [{
        'id': u.id,
        'email': u.email,
        'name': u.name,
        'requested_role': u.requested_role,
    } for u in pending_users]
    return Response(data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def approve_role(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        if user.requested_role and not user.is_role_approved:
            user.role = user.requested_role
            user.is_role_approved = True
            user.requested_role = None
            user.save()
            return Response({'detail': f'{user.email} is now a {user.role}'})
        return Response({'detail': 'Invalid role approval.'}, status=400)
    except User.DoesNotExist:
        return Response({'detail': 'User not found.'}, status=404)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def reject_role(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        if user.requested_role and not user.is_role_approved:
            user.role_rejection_reason = request.data.get('reason', 'No reason provided')
            user.requested_role = None
            user.save()
            return Response({'detail': f'{user.email} request rejected.'})
        return Response({'detail': 'Invalid rejection.'}, status=400)
    except User.DoesNotExist:
        return Response({'detail': 'User not found.'}, status=404)