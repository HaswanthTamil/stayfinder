# core/views.py
from django.http import JsonResponse
from .models import Hotel
from django.forms.models import model_to_dict
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json

def hotel_list(request):
    hotels = Hotel.objects.all()
    data = [model_to_dict(hotel) for hotel in hotels]
    return JsonResponse(data, safe=False)

@csrf_exempt  # allow PUT without CSRF (only for dev!)
@require_http_methods(["GET", "PUT"])  # explicitly allow GET & PUT
def hotel_detail(request, hotel_id):
    hotel = get_object_or_404(Hotel, id=hotel_id)

    if request.method == "GET":
        data = model_to_dict(hotel)
        return JsonResponse(data)

    elif request.method == "PUT":
        body = json.loads(request.body)
        # Update only allowed fields
        for field in ["is_booked", "title", "price_per_night", "location"]:  # adjust as needed
            if field in body:
                setattr(hotel, field, body[field])
        hotel.save()
        return JsonResponse(model_to_dict(hotel))
