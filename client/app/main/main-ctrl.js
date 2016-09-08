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

// Filters for what displays on page
    $scope.showCategory = null;  // Boolean; shows only a certain category (artist, album, track)
    $scope.showArtist = null; // Artist; shows tracks by selected artist
    $scope.showAlbum = null; // Album; shows tracks on the selected album


// Logic for filters
    $scope.filterCategory = (category) => {
        $scope.showCategory = category;
    }

}]);
