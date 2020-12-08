var app = angular.module('mainApp', ['ngRoute']).
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider
        .when('/', {
          templateUrl: '../konten/utama.html'
        })
        .when('/galeri', {
          templateUrl: '../konten/galeri.html'
        })
        .when('/about', {
          templateUrl: '../konten/about.html'
        });
    }]);

app.controller('operasi', function ($scope) {
  $scope.gambar = ['husky', 'golden retriever', 'canine', 'pekinezer'];
})
