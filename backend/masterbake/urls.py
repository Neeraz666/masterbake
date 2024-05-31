"""
URL configuration for masterbake project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import LogoutView

# Other required things for django rest framework are imported 
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),

    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh_pair'),

    path('api/users/', include('users.urls')),

    path('api/product/', include('products.urls')),
    
    path('api/cart/', include('cart.urls')),

    path('api/logout/', LogoutView.as_view(), name='Logout'),

    path('admin/', admin.site.urls),
]

# MEDIA settings is set so that all medias will be saved in MEDIA folder

from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)