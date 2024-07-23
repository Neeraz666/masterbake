from django.urls import path
from .views import ListCategory, ListProduct, ListSpecificCategory, ListSpecificProduct, SearchProduct

urlpatterns = [
    path('', ListProduct.as_view(), name='ListProduct'),
    path('category/', ListCategory.as_view(), name='ListCategory'),
    path('search/', SearchProduct.as_view(), name='search-products'),
    path('<slug:slug>/', ListSpecificCategory.as_view(), name='ListProductBySpecificCategory'),
    path('<slug:category_slug>/<slug:product_slug>/', ListSpecificProduct.as_view(), name='ListSpecificProduct'),
]
