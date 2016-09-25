(function () {
  'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  console.log("I am running!");
  $scope.meal = "";
  $scope.message = "";

  $scope.checkMeal = function () {
    if ($scope.meal == "") {
      $scope.message = "Please enter data first";
    } else {
      var splitMeal = $scope.meal.split(",");
      if (splitMeal.length > 3) {
        $scope.message = "Too much!";
      } else if (splitMeal.length <=3) {
        $scope.message = "Enjoy!";
      }
    }
  };
});

})();
