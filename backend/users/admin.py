from django.contrib import admin
from .models import UserAccount

# Register your models here.
class UserAccountAdmin(admin.ModelAdmin):

    list_display = ('email','firstname', 'lastname')
    list_display_links = ('email',)
    search_fields = ('email', 'username', 'firstname', 'lastname')
    list_per_page = 50
    readonly_fields = ('password', )

admin.site.register(UserAccount, UserAccountAdmin)