from rest_framework import authentication
from properties.models import Property
from .serializers import PropertySerializer
from rest_framework import viewsets


class PropertyViewSet(viewsets.ModelViewSet):
    serializer_class = PropertySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Property.objects.all()
