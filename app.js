var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, $http) {
  $scope.name = 'World';

  $http.get('CodeChallengeMockData.json').then(function(response){
    console.log(response);
  });
});
