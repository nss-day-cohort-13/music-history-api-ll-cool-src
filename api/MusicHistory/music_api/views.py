from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from music_api.models import Artist, Album, Track
from music_api.serializers import ArtistSerializer, AlbumSerializer, TrackSerializer


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        "artists": reverse("artist-list", request=request, format=format),
        "albums": reverse("album-list", request=request, format=format),
        "tracks": reverse("track-list", request=request, format=format)
    })


class ArtistList(viewsets.ModelViewSet):
    model = Artist
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    # lookup_field = 'name'


class AlbumList(viewsets.ModelViewSet):
    model = Album
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    # lookup_field = 'title'

class TrackList(viewsets.ModelViewSet):
    model = Track
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    # lookup_field = 'title'
