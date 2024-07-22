from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    profilephoto = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ('email', 'username', 'firstname', 'lastname', 'profilephoto','phone_number', 'address')
        read_only_fields = ['email', 'username']

    
