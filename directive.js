/**
 * Created by kjefferson on 6/26/15.
 */

var app = angular.module('InitTester', []);

app.controller('TestController', function($scope) {
    $scope.working = "Congrats, you didn't break Angular."
});

app.directive('profilePicSelector', function () {
    return {
        link: function($scope, $element, attrs) {
            console.log('testing');
            $element.initial("Kate", "Jefferson");
        }
    }
});