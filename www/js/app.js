define([
  'angular',
  'controllers/index',
  'directives/index',
  'routes/routes',
  'ui.sortable',
  'ngElastic',
  'ngRoute',
  'ngSanitize'
], function (angular, controllers, directives, routes) {
  var app = angular.module('app', [
    controllers.name,
    directives.name,
    'ui.sortable',
    'monospaced.elastic',
    'ngRoute',
    'ngSanitize'
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
