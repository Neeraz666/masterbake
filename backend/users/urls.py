from django.urls import path
from .views import SignUpView, UserDetail, UserProfileDetailView

urlpatterns = [
    path('signup', SignUpView.as_view(), name='Signup'),
    path('listuser', UserDetail.as_view(), name='ListUser'),
    path('profile', UserProfileDetailView.as_view(), name='UserProfile'),
]
