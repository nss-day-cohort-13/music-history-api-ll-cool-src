from rest_framework import routers
from django.conf.urls import url, include
from music_api import views

router = routers.DefaultRouter()

urlpatterns = [
    url(r'^', include(router.urls)),
]
