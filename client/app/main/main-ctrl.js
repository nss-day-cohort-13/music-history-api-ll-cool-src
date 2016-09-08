app.controller('MainCtrl', ['$scope', 'MainFactory', function($scope, MainFactory) {

    $scope.title = 'LL COOL SRC';

// Filters for what displays on page
    $scope.showArtists = null;  // Boolean; shows only artists
    $scope.filterArtist = null; // Artist; shows tracks by selected artist

    $scope.showAlbums = null;  // Boolean; shows only albums
    $scope.filterAlbum = null; // Album; shows tracks on the selected album

    $scope.showTracks = null;  // Boolean; shows all tracks

}]);
