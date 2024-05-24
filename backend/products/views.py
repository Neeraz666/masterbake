from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from .models import Category, Product, Image
from rest_framework import permissions
from .serializers import CategorySerializer, ProductSerializer

class ListCategory(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Category.objects.order_by('id')
    serializer_class = CategorySerializer

class ListProduct(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_name = self.kwargs.get('category')
        if category_name:
            return Product.objects.filter(category__name=category_name).order_by('id')
        return Product.objects.all().order_by('id')