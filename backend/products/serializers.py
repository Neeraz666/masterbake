from rest_framework import serializers
from .models import Category, Product, Image
from users.serializers import UserSerializer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CategoryProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'slug')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('image',)

class ProductSerializer(serializers.ModelSerializer):
    category = CategoryProductSerializer()
    images = ImageSerializer(many=True)    

    class Meta:
        model = Product
        fields = ('id', 'category', 'name', 'description', 'price', 'slug','images')



