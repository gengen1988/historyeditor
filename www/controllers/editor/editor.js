define([
  'js/controllers'
], function (controllers) {
  controllers.controller('EditorCtrl', [
    '$scope',
  function ($scope) {

    $scope.items = [{
      text: '后面有个冰柜'
    }];

    var update = function (item) {
      var items = $scope.items;
      item.editing = false;
    };

    var create = function () {
      $scope.items.push({
        text: $scope.text
      });
      $scope.text = '';
    };

    $scope.checkUpdate = function ($event, item) {
      if ($event.keyCode === 10) {
        update(item);
        $event.preventDefault();
        return;
      }
      if ($event.keyCode === 13) {
        if (!item.text || item.text === '') {
          $event.preventDefault();
        }
        return;
      }
    };

    $scope.checkAdd = function ($event) {
      if ($event.keyCode === 10) {
        create();
        $event.preventDefault();
        return;
      }
      if ($event.keyCode === 13) {
        if (!$scope.text || $scope.text === '') {
          $event.preventDefault();
        }
        return;
      }
    };

    $scope.focus = function (item) {
      var items = $scope.items;

      angular.forEach($scope.items, function (item) {
        item.editing = false;
      });
      item.editing = true;
    };

    $scope.blur = function () {
      angular.forEach($scope.items, function (item) {
        item.editing = false;
      });
    };

    $scope.remove = function (index, evt) {
      var result = confirm('确认删除该记录？');
      if (result) {
        $scope.items.splice(index, 1);
      }
      evt.stopPropagation();
    };

  }]);
});
