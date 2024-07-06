from django.urls import path
from .views import CartView, AddToCartView, IncrementCartItemQuantityView, DecrementCartItemQuantityView, RemoveCartItemView, CheckoutView, OrderHistoryView

urlpatterns = [
    path('', CartView.as_view(), name='cart'),
    path('add/', AddToCartView.as_view(), name='add-to-cart'),
    path('increment/<int:item_id>/', IncrementCartItemQuantityView.as_view(), name='increment-cart-item'),
    path('decrement/<int:item_id>/', DecrementCartItemQuantityView.as_view(), name='decrement-cart-item'),
    path('remove/<int:item_id>/', RemoveCartItemView.as_view(), name='remove-cart-item'),
    path('checkout/', CheckoutView.as_view(), name='checkout'),
    path('orders/', OrderHistoryView.as_view(), name='order-history'),
]
