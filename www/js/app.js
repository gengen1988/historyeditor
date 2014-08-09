define([
  'angular',
  'controllers/index',
  'routes/routes',
  'ngRoute'
], function (angular, controllers, routes) {
  var app = angular.module('app', [
    controllers.name,
    'ngRoute'
  ]);

  app.config([
    '$routeProvider',
    '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(false);
    angular.forEach(routes, function (view, path) {
      $routeProvider.when(path, {
        templateUrl: view
      });
    });
  }]);

  return app;
});
