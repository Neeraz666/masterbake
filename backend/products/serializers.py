from rest_framework import serializers
from .models import Category, Product, Image

# Serializer for Category
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

# Serializers required to show in product
class CategoryProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', )

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('image',)


class ProductSerializer(serializers.ModelSerializer):
    category = CategoryProductSerializer
    images = ImageSerializer(many=True)

    class Meta:
        model = Product
        fields = ('id', 'category', 'name', 'description', 'quantity', 'images')