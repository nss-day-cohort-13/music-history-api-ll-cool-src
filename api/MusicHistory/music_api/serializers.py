from music_api.models import Artist, Album, Track
from rest_framework import serializers


class ArtisSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Artist
        fields = ('id', 'url', 'name')


class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'url', 'title', 'artist', 'yearReleased')


class TrackSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Track
        fields = ('id', 'url', 'album', 'title', 'genre', 'length')
