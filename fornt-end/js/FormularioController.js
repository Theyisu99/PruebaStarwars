
 var app =angular.module("formulario", []).
 controller("ajax", function ( $http) {
  
 var datos= $.ajax({
    url: "php/formulario.php",
    dataType: "text",
    async: false,
  }).responseText;
  $http= document.getElementById("get");
  $http.innerHTML =  datos;
  
  console.log("gol");
});


