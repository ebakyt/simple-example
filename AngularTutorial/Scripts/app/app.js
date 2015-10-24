
var TodoApp = angular.module('TodoApp', ['ui.router', 'ngResource']);

TodoApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "list.html",
            controller: "ListCtrl"
        })


        /*
        .state('route1', {
            url: "/route1",
            templateUrl: "partials/route1.html"
        })
        .state('route1.list', {
            url: "/list",
            templateUrl: "partials/route1.list.html",
            controller: "route1Ctrl"
        })


        .state('route2', {
            url: "/route2",
            templateUrl: "partials/route2.html"
        })
        .state('route2.list', {
            url: "/list",
            templateUrl: "partials/route2.list.html",
            controller: "route2Ctrl"
        })


        .state('students', {
            url: "/ogrenciler",
            templateUrl: "partials/ogrenciler.html",
            controller: "ogrControl"
        })
        .state('students.courses', {
            url: "/courses/:ogrNumber",
            templateUrl: "partials/ogrenci.dersleri.html",
            controller: "dersControl"
        })
        */
});


TodoApp.factory('Todo', function ($resource) {
    return $resource('/api/Todo/:id', { id: '@id' }, { update: { method: 'PUT' } } );
});

var ListCtrl = function ($scope, $location, Todo) {

    $scope.search = function () {
        $scope.todos = Todo.query({ sort: $scope.sort_order, desc: $scope.is_desc });
    } 

    $scope.sort = function (col) {
        if ($scope.sort_order === col) {
            $scope.is_desc = !$scope.is_desc;
        } else {
            $scope.is_desc = false;
        }
        $scope.sort_order = col;
        $scope.search();
    }

    $scope.sort_order = "Priority";
    $scope.is_desc = false;
    //$scope.sort();
    $scope.search();

};