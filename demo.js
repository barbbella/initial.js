/**
 * Created by kjefferson on 6/26/15.
 */

<!-- Typical jQuery plugin invocation -->
//$('#format-toolbar').toolbar({
//    content: '#format-toolbar-options',
//    position: 'left'
//});

var App = angular.module('Toolbar', []);

App.directive('toolbarTip', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            $(element).toolbar(scope.$eval(attrs.toolbarTip));
        }
    };
});