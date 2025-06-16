# core/urls.py
from django.urls import path
from .views import hotel_list

urlpatterns = [
    path("hotels/", hotel_list, name="hotel_list")
]
