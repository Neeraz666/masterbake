from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
from .serializers import UserSerializer


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