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
        phone_number = data.get('phone_number')  # Get phone number
        service_type = data.get('service_type')
        message = data.get('message')

        # Save the form data to the database
        service_request = ServiceRequest(
            name=name,
            email=email,
            phone_number=phone_number,  # Save phone number to model
            service_type=service_type,
            message=message
        )
        service_request.save()

        return JsonResponse({'status': 'success', 'message': 'Form submitted successfully. I will get in touch ASAP.'})

    return JsonResponse({'status': 'error', 'message': 'Invalid request method.'})
