import uuid
from django.db import models

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