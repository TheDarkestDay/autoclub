from django.shortcuts import render
from rest_framework import viewsets
from drivers.serializers import  DriverSerializer,CarSerializer 
from drivers.models import Driver,Car

# Create your views here.
class DriverViewSet(viewsets.ModelViewSet):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer
    
class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    
    
def index(request):
    context = {}
    return render(request,"drivers/index.html",context)