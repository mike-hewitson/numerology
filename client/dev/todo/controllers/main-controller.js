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

                    // console.log($scope.dateOfBirth);

                    function reduceNumbers(number) {
                        // var stringYear = $scope.dateOfBirth.getFullYear().toString();
                        // console.log(number);
                        var numberArray = number.toString().split('');
                        // console.log(numberArray);

                        return numberArray.map(Number).reduce(function(a, b) {
                            return a + b;
                        });

                    }

                    $scope.year = reduceNumbers($scope.dateOfBirth.getFullYear());
                    if ($scope.year > 9 && ($scope.year !== 11 && $scope.year !== 22)) {
                        $scope.year = reduceNumbers($scope.year);
                    } 

                    // console.log($scope.year);
                    // $scope.year = 10;

                };

            }
        ]);
}(window.angular));
