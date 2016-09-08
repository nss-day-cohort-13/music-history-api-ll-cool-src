from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from music_api.models import Artist, Album, Track
from music_api.serializers import ArtistSerializer, AlbumSerializer, TrackSerializer


class ArtistList(viewsets.ModelViewSet):
    model = Artist
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class AlbumList(viewsets.ModelViewSet):
    model = Album
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class TrackList(viewsets.ModelViewSet):
    model = Track
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
