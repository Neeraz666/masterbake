from django.urls import path
from .views import ListCategory, ListProduct

urlpatterns = [
<<<<<<< HEAD
    path('', ListProduct.as_view(), name='ListProduct'),
    path('category/', ListCategory.as_view(), name='ListCategory'),
=======
    path('', ListProduct.as_view(), name='ListProduct'), 
    path('category/', ListCategory.as_view(), name='ListCategory'),
    path('<slug:slug>/', ListSpecificCategory.as_view(), name='ListProductBySpecificCategory'),
    path('<slug:category_slug>/<slug:product_slug>', ListSpecificProduct.as_view(), name='ListSpecificProduct'), 
>>>>>>> c1287522a692a09662a3f67351a34aa387dd53ec
]