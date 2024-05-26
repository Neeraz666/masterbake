from django.urls import path
from .views import ListCategory, ListProduct, ListSpecificCategory, ListSpecificProduct

urlpatterns = [
<<<<<<< HEAD
    
=======
<<<<<<< HEAD
    path('', ListProduct.as_view(), name='ListProduct'), 
    path('category/', ListCategory.as_view(), name='ListCategory'),
    path('<slug:slug>/', ListSpecificCategory.as_view(), name='ListProductBySpecificCategory'),
    path('<slug:category_slug>/<slug:product_slug>', ListSpecificProduct.as_view(), name='ListSpecificProduct'), 
=======
>>>>>>> 717e985e21fc55cd0f0d03668bc98bd0dc5a856b
    path('', ListProduct.as_view(), name='ListProduct'),
    path('category/', ListCategory.as_view(), name='ListCategory'),
>>>>>>> 16010d863c1ae7659d10dc44f8d7f1b3bb09bb5c
]