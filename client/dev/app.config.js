;
(function(ng) {
    'use strict';

    ng.module('numerology')
        .config([
            '$locationProvider',
            function($locationProvider) {

                $locationProvider.html5Mode(true);

            }
        ]);
}(window.angular));
