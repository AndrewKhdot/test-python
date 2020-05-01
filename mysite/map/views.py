# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.http import HttpResponse, JsonResponse
from .models import Point
from django.shortcuts import render
from django.views.generic import TemplateView
from django.shortcuts import render

# Create your views here.
class List(TemplateView):
    template_name = 'Points.html'
    def get(self, request):
        points = Point.objects.all()
        ctx = {'points': points}
        return render(request, self.template_name , ctx)

def index(request):
    return render(request, "Index.html")

def map(request):
    return render(request, "Map.html")




def add_point(request):
    if request.GET:
        point = Point.objects.create(lat = request.GET.get('lat'), lng = request.GET.get('lng'))
        point.save()
        data = {'mess': "Point added"}
        return JsonResponse(data)

