app.controller('MainCtrl', ['$scope', '$timeout', '$http', 'MainFactory', function($scope, $timeout, $http, MainFactory) {

// Fetch all song data; store in $scope.songData
    let rootDir;

    MainFactory.getApiRoot() // Get the API Root directory; this is saved as a fulfilled promise in MainFactory
        .then(root => {
            rootDir = root;                     // Save root directory locally as rootDir
            return $http.get(rootDir.artists);  // Get artists with the address on rootDir
        },
            err => console.log("error", err)
        )
        .then(artistRes => {
            $scope.artists = artistRes.data;   // Save artist data in $scope.artists
            return $http.get(rootDir.albums);  // Get albums with the address on rootDir
        },
            err => console.log("error", err)
        )
        .then((albumRes) => {
            $scope.albums = albumRes.data;     // Save album data in $scope.albums
            return $http.get(rootDir.tracks);  // Get tracks with the address on rootDir
        },
            err => console.log("error", err)
        )
        .then((trackRes) => {
            $scope.tracks = trackRes.data;     // Save track data in $scope.tracks
            $timeout();                        // Trigger $scope.$apply() with $timeout()
        },
            err => console.log("error", err)
        )
        .then(() => {
            console.log("artists:", $scope.artists);
            console.log("albums:", $scope.albums);
            console.log("tracks:", $scope.tracks);
        })

// Search bar
    $scope.userSearch = '';

// Form data
    $scope.name = "";
    $scope.albumTitle = "";
    $scope.albumArtist = "";
    $scope.trackTitle = "";
    $scope.trackArtitst = "";
    $scope.trackAlbum = "";
    $scope.trackGenre = "";
    $scope.trackLength = 0;



    $scope.completeArtist = () => {
        $http({
            url: "http://localhost:8000/artists/",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            data: {"name": $scope.name}
        })
        .then(artist => {
            $scope.artists.push(artist.data)
        })
        console.log("Artist", $scope.name)
    }

    $scope.completeAlbum = () => {
        $http({
            url: "http://localhost:8000/albums/",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        data: {"title": $scope.albumTitle, "artist": $scope.albumArtist}
        })
        .then(album => {
            $scope.albums.push(album.data)
        })
        console.log("Album Name", $scope.albumTitle)
    }

    $scope.completeTrack = () => {
        $http({
            url: "http://localhost:8000/tracks/",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            data: {"title": $scope.trackTitle, "album": $scope.trackAlbum, "artist": $scope.albumArtist,"genre": $scope.trackGenre, "length": $scope.trackLength}
        })
        .then(track => {
            $scope.tracks.push(track.data)
        })
        console.log("Track Name", $scope.trackTitle)
    }

// Filters for what displays on page
    $scope.showCategory = 'tracks';  // Category; shows only a certain category (artist, album, track)
    $scope.showArtist = null; // Artist name; shows tracks by selected artist
    $scope.showAlbum = null; // Album titlge; shows tracks on the selected album


// Logic for filters
    $scope.filterCategory = (category) => {
        $scope.showArtist = null;
        $scope.showAlbum = null;
        $scope.showCategory = category;
        console.log("category: ", $scope.showCategory);
    }

    $scope.showArtistAlbums = (artist) => {
        $scope.showCategory = 'albums';
        $scope.showArtist = artist;
    }

    $scope.showAlbumTracks = (album) => {
        $scope.showCategory = 'tracks';
        $scope.showAlbum = album;
    }

    $scope.getTrackArtistName = (location) => {
        let getAlbum = $scope.albums.find((album) => {
            return album.url === location;
        });
        let getArtist = $scope.artists.find((artist) => {
            return artist.url === getAlbum.artist;
        })
        return getArtist.name;
    }

    $scope.getAlbumName = (location) => {
        let getAlbum = $scope.albums.find((album) => {
            return album.url === location;
        });
        return getAlbum.title;
    }

    $scope.getArtistName = (param, selectingAlbum) => {
        if (!selectingAlbum) {
        // Param is a location, and user is not selecting an album from the dropdown
            let getArtist = $scope.artists.find((artist) => {
                return artist.url === param;
            });
            return getArtist.name;
        } else {
        // Param is a name, and user is selecting an album from the dropdown
            let getAlbum = $scope.albums.find((album) => {
                return album.title === param;
            });
            let getArtist = $scope.artists.find((artist) => {
                return artist.url === getAlbum.artist;
            })
            return getArtist.name;
        }
    }

}]);
