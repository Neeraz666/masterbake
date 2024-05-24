from django.urls import path
from .views import ListCategory, ListProduct

urlpatterns = [
    path('<str:category>/', ListProduct.as_view(), name='ListProductByCategory'),
    path('', ListProduct.as_view(), name='ListProduct'),
    path('categories/', ListCategory.as_view(), name='ListCategory'),
]