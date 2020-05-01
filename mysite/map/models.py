# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Point(models.Model):
    added_time = models.DateTimeField(auto_now = True)
    lat = models.FloatField()
    lng = models.FloatField()