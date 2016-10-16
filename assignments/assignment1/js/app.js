(function () {
'use strict';

angular.module('LunchChecker', [])

.controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController($scope) {
    $scope.lunchMenu = "cheese, bread";
    $scope.message = "Please enter data first";
    $scope.check = function () {
      $scope.message = getMessage($scope.lunchMenu);
    };
    function getMessage(menu) {
      if (menu == '') {
        return "Please enter data first";
      }
      var menuSplit = menu.split(",");
      var n = menuSplit.length;
      for (var i = 0; i < menuSplit.length; i++) {
        if (menuSplit[i] == '') {
          n--;
        }
      }
      if (n <= 3) {
        return "Enjoy!";
      }
      return "Too much!";
    };
  };

})();
