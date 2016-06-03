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

                    function reduceNumbers(number) {
                        // var re
                            var reducedNumber = number;
                        if (number > 9 && (number !== 11 && number !== 22)) {
                            reducedNumber = number.toString().split('').map(Number).reduce(function(a, b) {
                                return a + b;
                            });
                        }
                        console.log(number);
                        console.log(reducedNumber);
                        if (reducedNumber > 9 && (reducedNumber !== 11 && reducedNumber !== 22)) {
                            console.log('recursing ');
                            reducedNumber = reduceNumbers(reducedNumber);
                        }

                        return reducedNumber;
                    }

                    console.log('doing year');
                    $scope.year = reduceNumbers($scope.dateOfBirth.getFullYear());
                    console.log('doing month');
                    $scope.month = reduceNumbers($scope.dateOfBirth.getMonth() + 1);
                    console.log('doing day');
                    $scope.day = reduceNumbers($scope.dateOfBirth.getDate());
                };

            }
        ]);
}(window.angular));
