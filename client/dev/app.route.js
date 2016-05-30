;
(function(ng) {
    'use strict';

    ng.module('numerology')
        .config([
            '$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                        templateUrl: 'todo/templates/main.html',
                        controller: 'MainController',
                        controllerAs: 'mainCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }
        ]);
}(window.angular));
