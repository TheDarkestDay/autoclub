from .models import Driver
from rest_framework import serializers

class DriverSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Driver
        fields = ('id','name', 'age', 'profile')
        read_only_fields = ('id')
        