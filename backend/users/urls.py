from django.urls import path
from .views import SignUpView, UserDetail, UserProfileDetailView, PasswordResetRequestView, PasswordResetConfirmView

urlpatterns = [
    path('signup', SignUpView.as_view(), name='Signup'),
    path('listuser', UserDetail.as_view(), name='ListUser'),
    path('profile', UserProfileDetailView.as_view(), name='UserProfile'),
    path('password-reset/', PasswordResetRequestView.as_view(), name='password_reset_request'),
    path('password-reset-confirm/', PasswordResetConfirmView.as_view(), name = 'password_reset_confirm'),
]
