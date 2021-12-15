from django.conf import settings
from django.db import models


class Property(models.Model):
    "Generated Model"
    address = models.CharField(
        max_length=256,
    )


# Create your models here.
