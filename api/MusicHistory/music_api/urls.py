from rest_framework import routers
from django.conf.urls import url, include
from music_api import views

router = routers.DefaultRouter()
router.register(r'artists', views.ArtistList)
router.register(r'albums', views.AlbumList)
router.register(r'tracks', views.TrackList)

urlpatterns = [
    url(r'^', include(router.urls)),
]
