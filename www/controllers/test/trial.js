define(['js/controllers'], function (controllers) {

  controllers.controller('TrialCtrl', function ($scope) {
    $scope.items = [{
      text: '123'
    }, {
      text: '456'
    }];

    var focus = function (item) {
      item.editing = true;
      $scope.updating = true;
    };

    var blur = function (item) {
      item.editing = false;
      $scope.updating = false;
    };

    $scope.focus = focus;
    $scope.blur = blur;

    $scope.sortableOptions = {
      //axis: 'y',
      handle: '.handle',
      revert: true,
      scroll: false,
      placeholder: 'sortable-placeholder',
      cursor: 'move'
    }
  });

});
