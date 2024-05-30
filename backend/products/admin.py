from django.contrib import admin
from .models import Category, Product, Image, Cart, CartItem, Order, OrderItem


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

class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 1


class CartAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at', 'updated_at', 'get_total_price')
    search_fields = ('user__email',)
    inlines = [CartItemInline]

class CartItemAdmin(admin.ModelAdmin):
    list_display = ('cart', 'product', 'quantity', 'get_total_price')
    list_filter = ('cart', 'product')
    search_fields = ('product__name',)

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1

class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at', 'updated_at', 'total_price','status', 'order_number')
    search_fields = ('user__email',)
    inlines = [OrderItemInline]

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity', 'price', 'get_total_price')
    list_filter = ('order', 'product')
    search_fields = ('product__name',)

admin.site.register(Category, CategoryAdmin)
admin.site.register(Image)
admin.site.register(Product, ProductAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(CartItem, CartItemAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)