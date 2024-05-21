from django.urls import path
from .views import SignUpView, UserDetail

urlpatterns = [
    path('signup', SignUpView.as_view(), name='Signup'),
    path('listuser', UserDetail.as_view(), name='ListUser'),
]
