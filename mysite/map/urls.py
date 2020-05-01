from django.conf.urls import url
from . import views
from .views import List

urlpatterns = [
    url(r'^map/' , views.map),
    url(r'^$' , views.index),
    url(r'^points/' , List.as_view() , name = 'add_point'),
    url(r'^add-point/' , views.add_point),
]