moviesApp.controller('AccountsController', function ($scope, $http, $rootScope) {
    $http.get('json/users.json')
         .then(function (res) {
             $scope.accounts = res.data;
         });

    //IMoviesUIService.GetName(onSuccess,onError);

    var onSuccess = function (result)
    {
        $scope.accounts = result.data;
    }

    var onError = function (result) {
        $scope.accounts = result.data;
    }
    
    $rootScope.selectUser = function(user) {
      $rootScope.selectedUser = user;
      location.href = '#/profileinfo';
    };
});
