from django.contrib import admin
from .models import Category, Product, Image

class ImageAdmin(admin.TabularInline):
    model = Image
    extra = 1
    can_delete = True

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}

class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    list_display = ('name', 'category', 'slug', 'price')
    inlines = [ImageAdmin]



admin.site.register(Category, CategoryAdmin)
admin.site.register(Image)
admin.site.register(Product, ProductAdmin)