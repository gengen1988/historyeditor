requirejs.config({
  paths: {
    angular: '/bower_components/angular/angular',
    ngRoute: '/bower_components/angular-route/angular-route',
    ngSanitize: '/bower_components/angular-sanitize/angular-sanitize',
    ngElastic: '/bower_components/angular-elastic/elastic',
    ngAnimate: '/bower_components/angular-animate/angular-animate',
    'ui.sortable': '/bower_components/angular-ui-sortable/sortable',
    bootstrap: '/bower_components/bootstrap/dist/js/bootstrap',
    jquery: '/bower_components/jquery/dist/jquery',
    'jquery-ui': '/bower_components/jquery-ui/jquery-ui',
    less: '/bower_components/less/dist/less-1.7.4'
  },
  shim: {
    angular: {exports: 'angular', deps: ['jquery']},
    'ui.sortable': ['angular', 'jquery-ui'],
    'jquery-ui': ['jquery'],
    ngRoute: ['angular'],
    ngAnimate: ['angular'],
    ngSanitize: ['angular'],
    ngElastic: ['angular'],
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
