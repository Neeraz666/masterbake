from django.urls import path
from .views import ListCategory, ListProduct, ListSpecificCategory, ListSpecificProduct

urlpatterns = [
    path('', ListProduct.as_view(), name='ListProduct'),
    path('category/', ListCategory.as_view(), name='ListCategory'),
    path('<slug:slug>/', ListSpecificCategory.as_view(), name='ListProductBySpecificCategory'),
    path('<slug:category_slug>/<slug:product_slug>/', ListSpecificProduct.as_view(), name='ListSpecificProduct'),
]
