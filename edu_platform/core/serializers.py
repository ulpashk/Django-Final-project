from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
import pyotp

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField()

#     def validate(self, data):
#         user = authenticate(**data)
#         if user and user.is_active:
#             return user
#         raise serializers.ValidationError("Invalid credentials")


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    otp = serializers.CharField(required=False, write_only=True)

    def validate(self, data):
        email = data.get("email")
        password = data.get("password")
        otp = data.get("otp")

        user = authenticate(email=email, password=password)

        if not user:
            raise serializers.ValidationError("Invalid credentials")

        if user.otp_enabled:
            if not otp:
                raise serializers.ValidationError("OTP token is required")

            totp = pyotp.TOTP(user.otp_base32)
            if not totp.verify(otp):
                raise serializers.ValidationError("Invalid OTP")

        return user


class RoleRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['requested_role']

    def validate_requested_role(self, value):
        if value not in ['learner', 'teacher']:
            raise serializers.ValidationError("Invalid role request.")
        return value


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'email', 'name',
            'is_active', 'is_staff', 'requested_role',
            'otp_enabled', 'otp_verified', 'otp_auth_url',
        ]
        read_only_fields = ['otp_enabled', 'otp_verified', 'otp_auth_url']