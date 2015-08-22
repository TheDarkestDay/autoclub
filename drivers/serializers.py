from .models import Driver,Car
from rest_framework import serializers

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = {'id', 'model_name', 'owner'}
        read_only_fields = ('id')

class DriverSerializer(serializers.ModelSerializer):
    cars = CarSerializer(many=True, read_only=True)
    
    class Meta:
        model = Driver
        fields = ('id','name', 'age', 'profile', 'cars')
        read_only_fields = ('id')
        