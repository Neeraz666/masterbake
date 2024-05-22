import uuid
from django.db import models
from users.models import UserAccount

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='categories')
    description = models.CharField(blank=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='products')
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

    def __str__(self):
        return f"{self.uuid}--{self.product.name}"
    
class Cart(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE, related_name='cart')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Cart({self.user})"

    def get_total_price(self):
        # Calculate the total price of all items in the cart
        return sum(item.get_total_price() for item in self.items.all())

# CartItem model
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='cart_items', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.product.name} in cart of {self.cart.user.username}"

    def get_total_price(self):
        # Calculate the total price for this cart item
        return self.product.price * self.quantity

# Order model
class Order(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='orders')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Order({self.user}, {self.created_at})"

    def calculate_total_price(self):
        self.total_price = sum(item.get_total_price() for item in self.items.all())
        self.save()

# OrderItem model
class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='order_items', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Price at the time of order

    def __str__(self):
        return f"{self.product.name} in order of {self.order.user.username}"

    def get_total_price(self):
        # Calculate the total price for this order item
        return self.price * self.quantity