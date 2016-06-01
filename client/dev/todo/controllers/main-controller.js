;
(function(ng) {
    'use strict';

    ng.module('numerology')
        .controller('MainController', [
            '$log',
            '$scope',
            function($log, $scope) {
                $scope.isValid = function() {
                    return true;
                };

                $scope.calculateNumbers = function() {
                    var firstName = $scope.firstName.replace('-', ' ');
                    var firstNames = firstName.split(' ');
                    if (firstNames.length > 3) {
                        $scope.firstNames = [firstNames[0], firstNames[firstNames.length - 1]];
                    } else {
                        $scope.firstNames = firstNames;
                    }


                    $scope.surname = $scope.lastName.replace('-', '');
                };

            }
        ]);
}(window.angular));
