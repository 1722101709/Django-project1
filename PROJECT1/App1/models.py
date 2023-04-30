from django.db import models


class User(models.Model):
    username = models.CharField(max_length=59)
    password = models.CharField(max_length=37)
