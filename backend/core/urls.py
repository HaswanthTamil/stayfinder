# core/urls.py
from django.urls import path
from .views import hotel_list, hotel_detail

urlpatterns = [
    path("hotels/", hotel_list, name="hotel_list"),
    path("hotels/<int:hotel_id>/", hotel_detail, name="hotel_detail"),
]
