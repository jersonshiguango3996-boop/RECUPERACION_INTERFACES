from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
import os

urlpatterns = [
    path('', include('inicio.urls')),
    path('admin/', admin.site.urls),
]