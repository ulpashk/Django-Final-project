from django.urls import path
from .views import RegisterView, LoginView, RoleRequestView, list_role_requests, approve_role, reject_role, enable_2fa, disable_2fa

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('request-role/', RoleRequestView.as_view(), name='request-role'),
    path('admin/role-requests/', list_role_requests, name='list-role-requests'),
    path('admin/approve/<int:user_id>/', approve_role, name='approve-role'),
    path('admin/reject/<int:user_id>/', reject_role, name='reject-role'),

    # OTP endpoints
    path('otp/enable/', enable_2fa, name='enable-2fa'),
    path('otp/disable/', disable_2fa, name='disable-2fa'),
]