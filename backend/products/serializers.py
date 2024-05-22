from rest_framework import serializers
from .models import Category, Product, Image,  Cart, CartItem, Order, OrderItem
from users.serializers import UserSerializer

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


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = CartItem
        fields = ('id', 'product', 'quantity')

# Cart Serializer
class CartSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    cart_items = CartItemSerializer(many=True)

    class Meta:
        model = Cart
        fields = ('id', 'user', 'cart_items', 'created_at', 'updated_at')

# OrderItem Serializer
class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = OrderItem
        fields = ('id', 'product', 'quantity', 'price')

# Order Serializer
class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    order_items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = ('id', 'user', 'order_items', 'created_at', 'updated_at', 'status', 'total_amount')