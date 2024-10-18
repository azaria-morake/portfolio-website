from django.contrib import admin
from .models import ServiceRequest

@admin.register(ServiceRequest)
class ServiceRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'service_type', 'submitted_at')
    search_fields = ('name', 'email', 'service_type')
