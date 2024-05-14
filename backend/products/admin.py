from django.contrib import admin
from .models import Category, Product, Image 

class ImageAdmin(admin.TabularInline):
    model = Image
    extra = 1
    can_delete = True

class ProductAdmin(admin.ModelAdmin):
    list_display = ['category', 'name'] 
    search_fields = ('name',)
    inlines = [ImageAdmin]

admin.site.register(Category)
admin.site.register(Image)
admin.site.register(Product, ProductAdmin)