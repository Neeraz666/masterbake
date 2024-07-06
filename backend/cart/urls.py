from django.urls import path
from .views import CartView, AddToCartView, CheckoutView, OrderHistoryView

urlpatterns = [
    path('add/', AddToCartView.as_view(), name='add-to-cart'),
    path('checkout/', CheckoutView.as_view(), name='checkout'),
    path('orders/', OrderHistoryView.as_view(), name='order-history'),  
    path('', CartView.as_view(), name='cart'),
]

