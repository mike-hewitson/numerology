;
(function(ng) {
    'use strict';

    ng.module('numerology')
        .controller('MainController', [
            '$log',
            '$scope',
            function($log, $scope) {

                var letterToNumber = {
                    a: 1,
                    b: 2,
                    c: 3,
                    d: 4,
                    e: 5,
                    f: 6,
                    g: 7,
                    h: 8,
                    i: 9,
                    j: 1,
                    k: 2,
                    l: 3,
                    m: 4,
                    n: 5,
                    o: 6,
                    p: 7,
                    q: 8,
                    r: 9,
                    s: 1,
                    t: 2,
                    u: 3,
                    v: 4,
                    w: 5,
                    x: 6,
                    y: 7,
                    z: 8
                };

                $scope.isValid = function() {
                    return true;
                };

                $scope.calculateNumbers = function() {
                    // reduce a number down to its minimum
                    function reduceNumbers(number) {
                        var reducedNumber = number;
                        if (number > 9 && (number !== 11 && number !== 22)) {
                            reducedNumber = number.toString().split('').map(Number).reduce(function(a, b) {
                                return a + b;
                            });
                        }
                        if (reducedNumber > 9 && (reducedNumber !== 11 && reducedNumber !== 22)) {
                            reducedNumber = reduceNumbers(reducedNumber);
                        }

                        return reducedNumber;
                    }

                    function letterValue(letter) {
                        return letterToNumber[letter.toLowerCase()];
                    }

                    function convertStringToLetters(aString) {
                        return aString.split('').map(letterValue);
                    }

                    function reduceNameToNumber(aString) {
                        return reduceNumbers(
                            Number(convertStringToLetters(aString)
                                .map((function(num) {
                                    return num.toString();
                                }))
                                .reduce(function(a, b) {
                                    return a + b;
                                })));
                    }

                    // process first names
                    var firstNames = $scope.firstName.replace('-', ' ');
                    firstNames = firstNames.split(' ');
                    if (firstNames.length > 3) {
                        $scope.firstNames = [firstNames[0], firstNames[firstNames.length - 1]];
                    } else {
                        $scope.firstNames = firstNames;
                    }

                    $scope.firstNamesReduced = $scope.firstNames.map(reduceNameToNumber);
                    console.log($scope.firstNamesReduced);

                    // prepare surname
                    var surname = $scope.lastName.replace('-', '');
                    surname = surname.replace(' ', '');
                    $scope.surname = surname;

                    // process date of birth

                    $scope.year = reduceNumbers($scope.dateOfBirth.getFullYear());
                    $scope.month = reduceNumbers($scope.dateOfBirth.getMonth() + 1);
                    $scope.day = reduceNumbers($scope.dateOfBirth.getDate());

                    // calculate life path

                    var lifePathString = ($scope.year.toString() + $scope.month.toString() + $scope.day.toString());
                    $scope.lifePath = reduceNumbers(Number(lifePathString));


                };

            }
        ]);
}(window.angular));
