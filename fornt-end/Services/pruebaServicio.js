"use strict"
angular.module('client')
.factory('pruebaServicio', function($resource){
    return  $resource("http//localhost:8000/public/gg/:id",{id: "@id"});

});