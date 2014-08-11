define([
  'js/controllers'
], function (controllers) {
  controllers.controller('SortCtrl', function ($scope) {
    var tmpList = [];

    for (var i = 1; i <= 6; i++){
      tmpList.push({
        text: 'Item ' + i,
        value: i
      });
    }

    $scope.list = tmpList;

    $scope.sortableOptions = {
    };
    
  });
});
