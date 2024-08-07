from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Cart, CartItem, Order, OrderItem
from .serializers import CartSerializer, OrderSerializer
from products.models import Product

class CartView(RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = CartSerializer

    def get_object(self):
        return get_object_or_404(Cart, user=self.request.user)
    
class AddToCartView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        product_slug = request.data.get('product_slug')
        quantity = request.data.get('quantity', 1)
        cart, created = Cart.objects.get_or_create(user=request.user)
        product = get_object_or_404(Product, slug=product_slug)
        cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
        if not created:
            cart_item.quantity += int(quantity)
        else:
            cart_item.quantity = int(quantity)
        cart_item.save()
        return Response({"message": "Added to cart successfully."}, status=status.HTTP_201_CREATED)

class IncrementCartItemQuantityView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        item_id = kwargs.get('item_id')
        cart_item = get_object_or_404(CartItem, id=item_id, cart__user=request.user)
        cart_item.quantity += 1
        cart_item.save()
        return Response({"message": "Cart item quantity incremented."}, status=status.HTTP_200_OK)

class DecrementCartItemQuantityView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        item_id = kwargs.get('item_id')
        cart_item = get_object_or_404(CartItem, id=item_id, cart__user=request.user)
        if cart_item.quantity > 1:
            cart_item.quantity -= 1
            cart_item.save()
            return Response({"message": "Cart item quantity decremented."}, status=status.HTTP_200_OK)
        return Response({"message": "Quantity cannot be less than 1."}, status=status.HTTP_400_BAD_REQUEST)

class RemoveCartItemView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def delete(self, request, *args, **kwargs):
        item_id = kwargs.get('item_id')
        cart_item = get_object_or_404(CartItem, id=item_id, cart__user=request.user)
        cart_item.delete()
        return Response({"message": "Cart item removed."}, status=status.HTTP_204_NO_CONTENT)

class CheckoutView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user = request.user
        phone_number = request.data.get('phone_number')
        address = request.data.get('address')
        user.phone_number = phone_number
        user.address = address
        user.save()

        cart = get_object_or_404(Cart, user=user)
        order = Order(user=user)
        order.save()

        total_price = 0
        for item in cart.items.all():
            order_item = OrderItem(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price
            )
            order_item.save()
            total_price += order_item.get_total_price()

        total_price += 50  
        order.total_price = total_price
        order.save()
        cart.items.all().delete()

        return Response({
            "message": "Checkout successful. Order created.",
            "total_price": total_price,
            "order_number": order.order_number
        }, status=status.HTTP_201_CREATED)


class OrderHistoryView(ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user).order_by('-created_at')
