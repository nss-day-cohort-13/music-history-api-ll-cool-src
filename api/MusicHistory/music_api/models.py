from django.db import models
from django.utils import timezone

year = [(number, number) for number in range(1950, 2016)]


class Artist(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Album(models.Model):
    title = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, related_name='albums')
    yearReleased = models.IntegerField(choices=year, default=1984)

    def __str__(self):
        return self.title

class Track(models.Model):
    album = models.ForeignKey(Album, related_name='tracks')
    title = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    length = models.IntegerField(default=0)

    def __str__(self):
        return self.title
