;
(function(ng) {
    'use strict';

    ng.module('numerology')
        .controller('MainController', [
            '$log',
            '$scope',
            function($log, $scope) {
                $scope.name = 'Bob';
                $scope.number1 = 0;
                $scope.number2 = 1;

                $scope.isValid = function() {
                    return true;
                };

                $scope.calculateNumbers = function() {
                    $scope.number1 = 55;
                    $scope.number2 = 66;
                };

            }
        ]);
}(window.angular));
