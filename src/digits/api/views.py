from rest_framework import viewsets
from ..models import Digits
from .serializers import DigitSerializer


class DigitViewSet(viewsets.ModelViewSet):
    serializer_class = DigitSerializer
    queryset = Digits.objects.all()
