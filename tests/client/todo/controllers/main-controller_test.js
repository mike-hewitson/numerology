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

    describe('numerology:', function() {
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
        describe('first name tests:', function() {
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

        describe('last name tests:', function() {
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

        describe('date of birth tests:', function() {
            describe('reduce year:', function() {
                it('given a 1997-07-25, return it summed down', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1997, 6, 25);
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
            describe('reduce month:', function() {
                it('given a 1997-07-25, return a month of 7', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1997, 6, 25);
                    _scope.calculateNumbers();

                    expect(_scope.month).to.equal(7);
                }));
                it('given a 1997-12-25, return a month of 3', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1997, 11, 25);
                    _scope.calculateNumbers();

                    expect(_scope.month).to.equal(3);
                }));
                it('given a 1811-11-25, return it special case of 11 ', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1811, 10, 25);
                    _scope.calculateNumbers();

                    expect(_scope.month).to.equal(11);
                }));
            });
            describe('reduce day:', function() {
                it('given a 1997-07-25, return a day of 7', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1997, 6, 25);
                    _scope.calculateNumbers();

                    expect(_scope.day).to.equal(7);
                }));
                it('given a 1997-12-12, return a day of 3', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1997, 11, 12);
                    _scope.calculateNumbers();

                    expect(_scope.day).to.equal(3);
                }));
                it('given a 1811-11-11, return it special case of 11 ', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1811, 10, 11);
                    _scope.calculateNumbers();

                    expect(_scope.day).to.equal(11);
                }));
            });
            describe('test whole dates:', function() {
                it('given a 1935-05-28, return a 9,5,1 and life path 6', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1935, 4, 28);
                    _scope.calculateNumbers();

                    expect(_scope.year).to.equal(9);
                    expect(_scope.month).to.equal(5);
                    expect(_scope.day).to.equal(1);
                    expect(_scope.lifePath).to.equal(6);
                }));
                it('given a 1975-11-04, return a 22,11,4 and life path 1', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1975, 10, 4);
                    _scope.calculateNumbers();

                    expect(_scope.year).to.equal(22);
                    expect(_scope.month).to.equal(11);
                    expect(_scope.day).to.equal(4);
                    expect(_scope.lifePath).to.equal(1);
                }));
                it('given a 1940-03-12, return 5,3,3 and life path of 11', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1940, 2, 12);
                    _scope.calculateNumbers();

                    expect(_scope.year).to.equal(5);
                    expect(_scope.month).to.equal(3);
                    expect(_scope.day).to.equal(3);
                    expect(_scope.lifePath).to.equal(11);
                }));
            });
            describe('life path:', function() {
                it('given a 1935-05-28, return a 9,5,1 and life path 6', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1935, 4, 28);
                    _scope.calculateNumbers();

                    expect(_scope.year).to.equal(9);
                    expect(_scope.month).to.equal(5);
                    expect(_scope.day).to.equal(1);
                    expect(_scope.lifePath).to.equal(6);
                }));
                it('given a 1975-11-04, return a 22,11,4 and life path 1', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1975, 10, 4);
                    _scope.calculateNumbers();

                    expect(_scope.year).to.equal(22);
                    expect(_scope.month).to.equal(11);
                    expect(_scope.day).to.equal(4);
                    expect(_scope.lifePath).to.equal(1);
                }));
                it('given a 1940-03-12, return 5,3,3 and life path of 11', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Bob';
                    _scope.lastName = 'Jones';
                    _scope.dateOfBirth = new Date(1940, 2, 12);
                    _scope.calculateNumbers();

                    expect(_scope.year).to.equal(5);
                    expect(_scope.month).to.equal(3);
                    expect(_scope.day).to.equal(3);
                    expect(_scope.lifePath).to.equal(11);
                }));
            });
            describe('expression:', function() {
                it('given Louise Karen Casper, return an expression 3', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Louise Karen';
                    _scope.lastName = 'Casper';
                    _scope.dateOfBirth = new Date(1935, 4, 28);
                    _scope.calculateNumbers();

                    expect(_scope.expression).to.equal(3);
                }));
                it('given Howard Joseph Snyder, return an expression 11', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Howard Joseph';
                    _scope.lastName = 'Snyder';
                    _scope.dateOfBirth = new Date(1935, 4, 28);
                    _scope.calculateNumbers();

                    expect(_scope.expression).to.equal(11);
                }));
                it('given Sylvia Anne Pasetta, return an expression 6', inject(function($controller) {
                    $controller(CONTROLLER_NAME, { $scope: _scope });

                    _scope.firstName = 'Sylvia Anne';
                    _scope.lastName = 'Pasetta';
                    _scope.dateOfBirth = new Date(1935, 4, 28);
                    _scope.calculateNumbers();

                    expect(_scope.expression).to.equal(6);
                }));
            });
        });
    });

});
