from rest_framework import serializers
from ..models import Digits


class DigitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Digits
        fields = ('id', 'image', 'result')
