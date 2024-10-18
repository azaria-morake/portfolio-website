from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ServiceRequest
import json

@csrf_exempt
def submit_service_request(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        service_type = data.get('service_type')
        message = data.get('message')

        # Save the form data to the database
        service_request = ServiceRequest(
            name=name,
            email=email,
            service_type=service_type,
            message=message
        )
        service_request.save()

        return JsonResponse({'status': 'success', 'message': 'Form submitted successfully.'})

    return JsonResponse({'status': 'error', 'message': 'Invalid request method.'})
