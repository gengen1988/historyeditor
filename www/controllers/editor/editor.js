define([
  'js/controllers'
], function (controllers) {
  controllers.controller('EditorCtrl', [
    '$scope',
  function ($scope) {
    $scope.text = 'helloworld';
  }]);
});
