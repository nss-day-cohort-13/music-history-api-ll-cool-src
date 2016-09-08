app.config(($routeProvider) => {
    $routeProvider
        .when('/', {
            controller: 'MainCtrl',
            templateUrl: 'app/main/main.html'
        })
})
