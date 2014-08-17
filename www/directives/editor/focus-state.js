define([
  'js/directives'
], function (directives) {
  directives.directive('focusState', ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      scope: {
        trigger: '=focusState'
      },
      link: function (scope, element) {
        var el = element[0];
        scope.$watch('trigger', function (newValue, oldValue) {
          var end = el.value.length;
          if (newValue) {
            $timeout(function () {
              el.focus();
              el.setSelectionRange(end, end);
            });
          }
        });
      }
    }
  }]);
});
