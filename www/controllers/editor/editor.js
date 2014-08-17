define([
  'js/controllers'
], function (controllers) {
  controllers.controller('EditorCtrl', [
    '$scope',
    '$document',
    '$timeout',
  function ($scope, $document, $timeout) {

    $scope.greenFrame = false;

    $document.bind('keypress', function (event) {

      $scope.$apply(function () {
        console.log($scope);

        if (!$scope.text) {
          $scope.text = '';
        }
        if (!$scope.editing) {
          if ($scope.greenFrame) {
            return;
          }

          // FIXME: update in green frame
          if (event.keyCode === 10) {
            return;
          }

          $scope.text += String.fromCharCode(event.keyCode);
        }

        $scope.editing = true;
      });
    });

    $scope.items = [{
      text: '后面有个冰柜'
    }];

    var update = function (item) {
      $scope.blur();
      $scope.editing = false;
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
      item.editing = true;
      $scope.greenFrame = true;
    };

    $scope.blur = function (item) {
      item.editing = false;
      $scope.greenFrame = false;
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
