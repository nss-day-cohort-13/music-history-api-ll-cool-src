app.factory('MainFactory', ($http) => {

    let httpRoot = $http.get('http://localhost:8000');

    return {

        getApiRoot: () => {
            return httpRoot.then(res => res.data);
        }

    }
})
