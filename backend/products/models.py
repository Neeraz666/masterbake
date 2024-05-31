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
    
