from django.db import models
from django.utils import timezone

# Create your models here.
class Driver(models.Model):
    name = models.CharField(max_length=10)
    age = models.IntegerField()
    registration_date = models.DateTimeField(default=timezone.now)
    profile = models.CharField(max_length=200)
    
class Car(models.Model):
    model_name = models.CharField(max_length=20)
    owner = models.ForeignKey(Driver)
    