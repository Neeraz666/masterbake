import uuid
from django.db import models
from users.models import UserAccount
from django.utils.text import slugify

# Models
class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='categories')
    description = models.TextField(blank=True)  # Changed to TextField
    slug = models.SlugField(max_length = 100, blank=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)

        super().save(*args, **kwargs)

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.PositiveIntegerField()
    slug = models.SlugField(max_length=100, blank=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)

        super().save(*args, **kwargs)

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

class Order(models.Model):
    PENDING = 'Pending'
    COMPLETE = 'Complete'
    
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (COMPLETE, 'Complete'),
    ]
    
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='orders')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=PENDING)
    order_number = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)

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
    price = models.DecimalField(max_digits=10, decimal_places=2)  

    def __str__(self):
        return f"{self.product.name} in order of {self.order.user.username}"

    def get_total_price(self):
        return self.price * self.quantity