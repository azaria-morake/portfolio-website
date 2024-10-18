from django.db import models
from django.utils import timezone

class ServiceRequest(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    service_type = models.CharField(max_length=255, blank=True)
    message = models.TextField()
    submitted_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

