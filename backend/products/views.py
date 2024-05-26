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
    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer


class ListSpecificCategory(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ProductSerializer
    def get_queryset(self):
        category_slug = self.kwargs.get('slug') 
        if category_slug:
            return Product.objects.filter(category__slug=category_slug).order_by('id')


class ListSpecificProduct(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_slug = self.kwargs.get('category_slug')
        product_slug = self.kwargs.get('product_slug')
        if product_slug:
            return Product.objects.filter(category__slug = category_slug, slug=product_slug).order_by('id')
        return Product.objects.none()