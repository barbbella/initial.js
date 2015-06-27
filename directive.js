/**
 * Created by kjefferson on 6/26/15.
 */

var app = angular.module('InitTester', []);

app.controller('TestController', ['$scope', function($scope) {
    $scope.firstName = "Kate";
    $scope.lastName = "Jefferson";
}]);

app.directive('profilePicSelector', function () {
    return {
        controller: 'TestController',
        link: function($scope, $element) {
            $element.initial($scope.firstName, $scope.lastName);
        }
    }
});