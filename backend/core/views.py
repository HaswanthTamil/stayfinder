# core/views.py
from django.http import JsonResponse
from .models import Hotel
from django.forms.models import model_to_dict

def hotel_list(request):
    hotels = Hotel.objects.all()
    data = [model_to_dict(hotel) for hotel in hotels]
    return JsonResponse(data, safe=False)
