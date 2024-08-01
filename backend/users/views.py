import datetime
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
from .serializers import UserSerializer
from .permissions import IsOwner
import random
from rest_framework import status
from django.core.mail import send_mail
from django.utils import timezone


User = get_user_model()


# Create your views here.
class SignUpView(APIView):

    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        email = data['email']
        username = data['username']
        firstname = data['firstname']
        lastname = data['lastname']
        profilephoto = data['profilephoto']
        password = data['password']
        password1 = data['password1']


        if password == password1:
            try:
                validate_password(password)
            except ValidationError as e:
                return Response({'Error': e.messages})
            
            if User.objects.filter(email=email).exists():
                return Response({'error': 'The email already exits! Try another.'})
            
            else:
                user = User.objects.create_user(email=email, username=username, firstname=firstname, lastname=lastname, profilephoto=profilephoto, password=password)

                user.save()

                return Response({'Success': 'Created User successfully.'})
            
        else:
            return Response({'error': 'Passwords donot match!'})

class UserDetail(ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    # queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        # Filter queryset to return data of the authenticated user only
        return User.objects.filter(pk=self.request.user.pk)
    
class UserProfileDetailView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwner]

    def get_object(self):
        return self.request.user
    
class PasswordResetRequestView(APIView):

    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        data = self.request.data

        email = data['email']

        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.filter(email=email).first()

        if not user:
            return Response({'error': 'You are not registered.'}, status=status.HTTP_400_BAD_REQUEST)

        otp = random.randint(100000, 999999)
        user.otp = otp
        user.otp_expiration = timezone.now() + datetime.timedelta(minutes=10)
        user.save()

        send_mail(
            'Password Reset OTP',
            f'Your OTP for password reset is {otp}',
            'no-reply@gmail.com',
            [email],
        )
        
        return Response({'message': 'You will receive an OTP for password reset. Please check your mail.'}, status=status.HTTP_200_OK)
    
class PasswordResetConfirmView(APIView):

    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        data = self.request.data

        email = data['email']
        otp = data['otp']
        new_password = request.data.get('new_password')

        if not email or not otp or not new_password:
            return Response({'error': 'Email, OTP, and New password are required'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.filter(email=email, otp=otp).first()

        if not user or user.otp_expiration < timezone.now():
            return Response({'error':'Invalid OTP or OTP has expired'}, status=status.HTTP_400_BAD_REQUEST)
        
        user.set_password(new_password)
        user.otp = ''
        user.otp_expiration = None
        user.save()

        return Response({'message': 'Password reset successfully'}, status=status.HTTP_200_OK)
    

