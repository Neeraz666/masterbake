from django.urls import path
from .views import ListCategory, ListProduct

urlpatterns = [
    path('', ListProduct.as_view(), name='ListProduct'),
    path('category/', ListCategory.as_view(), name='ListCategory'),
]