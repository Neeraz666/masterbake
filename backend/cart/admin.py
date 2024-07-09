from django.contrib import admin
from .models import Cart, CartItem, Order, OrderItem

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
    list_display = ('user', 'get_phone_number', 'get_address', 'created_at','updated_at', 'total_price', 'status', 'order_number')
    readonly_fields = ('order_number','get_phone_number', 'get_address','created_at', 'updated_at',)
    list_filter = ('status',) 
    search_fields = ('user__email',)
    inlines = [OrderItemInline]

    def get_phone_number(self, obj):
        return obj.user.phone_number
    get_phone_number.short_description = 'Phone Number'

    def get_address(self, obj):
        return obj.user.address
    get_address.short_description = 'Address'

class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity', 'price', 'get_total_price')
    list_filter = ('order', 'product')
    search_fields = ('product__name',)

admin.site.register(Cart, CartAdmin)
admin.site.register(CartItem, CartItemAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem, OrderItemAdmin)
