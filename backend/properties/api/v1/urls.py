from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PropertyViewSet

router = DefaultRouter()
router.register("property", PropertyViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
