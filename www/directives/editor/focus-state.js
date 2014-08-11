define([
  'js/directives'
], function (directives) {
  directives.directive('focusState', ['$timeout', function ($timeout) {
    return {
      scope: {trigger: '=focusState'},
      link: function (scope, element) {
        scope.$watch('trigger', function (value) {
          if (value === true) {
            element[0].focus();
          }
        });
      }
    }
  }]);
});
