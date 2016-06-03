'use strict';

// var expect = require('chai').expect;

describe('main.controller', function() {
    var _scope, _Todo, _httpBackend, _logMock;
    var CONTROLLER_NAME = 'MainController as mainCtrl';
    // var URL_GET_ALL = '/api/todos';
    // var URL_CREATE_TODO = '/api/todos';
    // var URL_DELETE_TODO = '/api/todos/';

    beforeEach(module('numerology'));

    beforeEach(inject(function($injector) {
        _scope = $injector.get('$rootScope').$new();
        _httpBackend = $injector.get('$httpBackend');
        _logMock = $injector.get('$log');
        // _Main = $injector.get('Main');
    }));

    describe('init', function() {
        xit('should be initialized correctly', inject(function($controller) {
            $controller(CONTROLLER_NAME, { $scope: _scope });
        }));

        xit('should have todo as the instanceof Todo', inject(function($controller) {
            $controller(CONTROLLER_NAME, { $scope: _scope });

            expect(_scope.todoCtrl.todo instanceof _Todo).toBeTruthy();
        }));

        xit('should have todos as an empty array', inject(function($controller) {
            $controller(CONTROLLER_NAME, { $scope: _scope });

            expect(window.angular.equals(_scope.todoCtrl.todos, [])).toBeTruthy();
        }));
    });

    // describe('onLoad', function() {
    //     it('should fill the todos array with the server response', inject(function($controller) {
    //         var _response = [{todoMessage: 'hello', createdAt: Date.now()}, {todoMessage: 'oh, hey!', createdAt: Date.now()}];

    //         _httpBackend.expectGET(URL_GET_ALL).respond(_response);

    //         $controller(CONTROLLER_NAME, {$scope: _scope});

    //         _httpBackend.flush();

    //         expect(window.angular.equals(_scope.todoCtrl.todos, _response)).toBeTruthy();
    //     }));
    // });

    describe('numerology', function() {
        // it('should try to createTodo, but server returns error - 400', inject(function($controller) {
        //     spyOn(_logMock, 'error').and.callFake(window.angular.noop);

        //     /* jshint -W055 */
        //     var _todo = new _Todo();
        //     _todo.todoMessage = 'abcdef';

        //     _httpBackend.expectGET(URL_GET_ALL).respond(200);
        //     _httpBackend.expectPOST(URL_CREATE_TODO, _todo).respond(400);

        //     $controller(CONTROLLER_NAME, {$scope: _scope});

        //     _scope.todoCtrl.createTodo(_todo);

        //     _httpBackend.flush();

        //     expect(_logMock.error).toHaveBeenCalled();
        // }));

        xit('given any name it should return test answers correctly', inject(function($controller) {
            // var _response = {_id: 'abcdef123', todoMessage: 'abcdef', createdAt: Date.now()};

            /* jshint -W055 */
            // var _todo = new _Todo();
            // _todo.todoMessage = 'abcdef';

            // _httpBackend.expectGET(URL_GET_ALL).respond(200);
            // _httpBackend.expectPOST(URL_CREATE_TODO, _todo).respond(200, _response);

            $controller(CONTROLLER_NAME, { $scope: _scope });

            _scope.calculateNumbers();

            // _httpBackend.flush();

            expect(window.angular.equals(_scope.number1, 55)).toBeTruthy();
            expect(window.angular.equals(_scope.number2, 66)).toBeTruthy();
            // expect(_scope.todoCtrl.todo.todoMessage).toBeNull();
        }));

        it('given Bob Smith should return Bob Smith ', inject(function($controller) {
            $controller(CONTROLLER_NAME, { $scope: _scope });

            _scope.firstName = 'Bob';
            _scope.lastName = 'Smith';
            _scope.dateOfBirth = new Date(1997, 7, 25);

            _scope.calculateNumbers();

            expect(_scope.firstNames[0]).to.equal('Bob');
            expect(_scope.surname).to.equal('Smith');
        }));

        it('given a hyphenated name first name, return the as two names', inject(function($controller) {
            $controller(CONTROLLER_NAME, { $scope: _scope });

            _scope.firstName = 'Bob-Joe';
            _scope.lastName = 'Smith';
            _scope.dateOfBirth = new Date(1997, 7, 25);

            _scope.calculateNumbers();

            expect(_scope.firstNames).to.have.length(2);
            expect(_scope.firstNames[0]).to.equal('Bob');
            expect(_scope.firstNames[1]).to.equal('Joe');
            expect(_scope.surname).to.equal('Smith');
        }));
        describe('first name tests', function() {
            it('given three first names, return all three', inject(function($controller) {
                $controller(CONTROLLER_NAME, { $scope: _scope });

                _scope.firstName = 'Bob Joe John';
                _scope.lastName = 'Smith';
                _scope.dateOfBirth = new Date(1997, 7, 25);

                _scope.calculateNumbers();

                expect(_scope.firstNames).to.have.length(3);
                expect(_scope.firstNames[0]).to.equal('Bob');
                expect(_scope.firstNames[1]).to.equal('Joe');
                expect(_scope.firstNames[2]).to.equal('John');
                expect(_scope.surname).to.equal('Smith');
            }));
            it('given more than three first names, return the first and last', inject(function($controller) {
                $controller(CONTROLLER_NAME, { $scope: _scope });

                _scope.firstName = 'Bob Joe John Alice';
                _scope.lastName = 'Smith';
                _scope.dateOfBirth = new Date(1997, 7, 25);

                _scope.calculateNumbers();

                expect(_scope.firstNames).to.have.length(2);
                expect(_scope.firstNames[0]).to.equal('Bob');
                expect(_scope.firstNames[1]).to.equal('Alice');
                expect(_scope.surname).to.equal('Smith');
            }));

        });

        describe('last name tests', function() {
            it('given a double barrel name, return it joined', inject(function($controller) {
                $controller(CONTROLLER_NAME, { $scope: _scope });

                _scope.firstName = 'Bob Joe John Alice';
                _scope.lastName = 'Jones Smith';
                _scope.dateOfBirth = new Date(1997, 7, 25);

                _scope.calculateNumbers();

                expect(_scope.surname).to.equal('JonesSmith');
            }));

            it('given a hyphenated name, return it joined', inject(function($controller) {
                $controller(CONTROLLER_NAME, { $scope: _scope });

                _scope.firstName = 'Bob Joe John Alice';
                _scope.lastName = 'Smith-Jones';
                _scope.dateOfBirth = new Date(1997, 7, 25);

                _scope.calculateNumbers();

                expect(_scope.surname).to.equal('SmithJones');
            }));
        });

        describe('date of birth tests', function() {
            it('given a 1997-07-25, return it summed down', inject(function($controller) {
                $controller(CONTROLLER_NAME, { $scope: _scope });

                _scope.firstName = 'Bob';
                _scope.lastName = 'Jones';
                _scope.dateOfBirth = new Date(1997, 7, 25);
                _scope.calculateNumbers();

                expect(_scope.year).to.equal(8);
            }));
            it('given a 1811-07-25, return it special case of 11 ', inject(function($controller) {
                $controller(CONTROLLER_NAME, { $scope: _scope });

                _scope.firstName = 'Bob';
                _scope.lastName = 'Jones';
                _scope.dateOfBirth = new Date(1811, 7, 25);
                _scope.calculateNumbers();

                expect(_scope.year).to.equal(11);
            }));
            it('given a 1993-07-25, return it special case of 22 ', inject(function($controller) {
                $controller(CONTROLLER_NAME, { $scope: _scope });

                _scope.firstName = 'Bob';
                _scope.lastName = 'Jones';
                _scope.dateOfBirth = new Date(1993, 7, 25);
                _scope.calculateNumbers();

                expect(_scope.year).to.equal(22);
            }));
        });
    });

});
