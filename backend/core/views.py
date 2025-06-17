# core/views.py
from django.http import JsonResponse
from .models import Hotel
from django.forms.models import model_to_dict
from django.shortcuts import get_object_or_404, render

def hotel_list(request):
    hotels = Hotel.objects.all()
    data = [model_to_dict(hotel) for hotel in hotels]
    return JsonResponse(data, safe=False)

def hotel_detail(request, hotel_id):
    hotel = get_object_or_404(Hotel, id=hotel_id)
    data = model_to_dict(hotel)
    return JsonResponse(data)
