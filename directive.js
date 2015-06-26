/**
 * Created by kjefferson on 6/26/15.
 */
//$(document).ready(function() {
//    $('.profilePic').initial("Kate", "Jefferson");
//});

var app = angular.module('InitTester', []);

app.controller('TestController', function($scope) {
    $scope.working = "Congrats, you didn't break Angular."
});

app.directive('profilePicSelector', function () {
    return {
        //restrict: 'A',
        link: function($scope, $element, attrs) {
            console.log('testing');
            $element.initial("Kate", "Jefferson");
        }
        //link: function($scope, $element, attrs) {
        //    console.log('text');
        //    $element.html('This is the element' + element);
        //}
    }
});