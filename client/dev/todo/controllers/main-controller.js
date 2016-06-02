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
                    var firstNames = $scope.firstName.replace('-', ' ');
                    firstNames = firstNames.split(' ');
                    if (firstNames.length > 3) {
                        $scope.firstNames = [firstNames[0], firstNames[firstNames.length - 1]];
                    } else {
                        $scope.firstNames = firstNames;
                    }

                    var surname = $scope.lastName.replace('-', '');
                    surname = surname.replace(' ', '');
                    $scope.surname = surname;
                };

            }
        ]);
}(window.angular));
