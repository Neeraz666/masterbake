from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from .models import Category, Product, Image
from rest_framework import permissions
from .serializers import CategorySerializer, ProductSerializer

# Create your views here.

class ListCategory(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Category.objects.order_by('id')
    serializer_class = CategorySerializer

class ListProduct(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Product.objects.order_by('id')
    serializer_class = ProductSerializer
    
