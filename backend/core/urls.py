# core/urls.py
from django.urls import path
from .views import get_hotels_raw, hotel_detail

urlpatterns = [
    path("hotels/", get_hotels_raw, name="hotel_list"),
    path("hotels/<int:hotel_id>/", hotel_detail, name="hotel_detail"),
]
