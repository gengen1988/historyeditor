requirejs.config({
  paths: {
    angular: '/bower_components/angular/angular',
    ngRoute: '/bower_components/angular-route/angular-route',
    bootstrap: '/bower_components/bootstrap/dist/js/bootstrap',
    jquery: '/bower_components/jquery/dist/jquery',
    less: '/bower_components/less/dist/less-1.7.4'
  },
  shim: {
    angular: {exports: 'angular'},
    ngRoute: ['angular'],
    bootstrap: ['jquery']
  }
});

requirejs([
  'angular',
  'js/app',
  'less'
], function (angular, app) {
  angular.bootstrap(document, [app.name]);
});
