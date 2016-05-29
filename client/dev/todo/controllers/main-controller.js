;
(function(ng) {
    'use strict';

    ng.module('numerology')
        .controller('MainController', [
            '$log',
            '$scope',
            function($log, $scope) {
                $scope.name = 'Bob';

                function isValid() {
                  return true;
                }

            }
        ]);
}(window.angular));
