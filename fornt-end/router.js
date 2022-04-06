"use strict"
angular.module('client',['ngResource','ngRoute'])
.config (function($routeProvider){
    $routeProvider.when('/notes'),{
        templateUrl: 'views/formulario'
    }
})