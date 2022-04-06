/* 
function AlumnosController($scope) {
  $scope.alumnos = [
    { nombre: "Juan Blanco ", telefono: "1234567890", curso: "Segundo Eso" },
    {
      nombre: "Marta Altamira ",
      telefono: "1234567870",
      curso: "Primero de derecho ",
    },
    {
      nombre: "Marta Altamira ",
      telefono: "1234567870",
      curso: "Primero de derecho ",
    },
  ];
  $scope.Save = function () {
    $scope.alumnos.push({
      nombre: $scope.nuevoAlumno.nombre,
      telefono: $scope.nuevoAlumno.telefono,
      curso: $scope.nuevoAlumno.curso,
     
    });

    $scope.formVisibility=false;
    console.log($scope.formVisibility);
  };
  $scope.ShowForm=function(){
      $scope.formVisibility=true;
      console.log($scope.formVisibility);

  }
}
 */




function AlumnosController($scope) {
  $scope.alumnos = [
    { nombre: "Juan Blanco ", telefono: "1234567890", curso: "Segundo Eso" },
    {
      nombre: "Marta Altamira ",
      telefono: "1234567870",
      curso: "Primero de derecho ",
    },
    {
      nombre: "Marta Altamira ",
      telefono: "1234567870",
      curso: "Primero de derecho ",
    },
  ];
  $scope.Save = function () {
    $scope.alumnos.push({
      nombre: $scope.nuevoAlumno.nombre,
      telefono: $scope.nuevoAlumno.telefono,
      curso: $scope.nuevoAlumno.curso,
     
    });

    $scope.formVisibility=false;
    console.log($scope.formVisibility);
  };
  $scope.ShowForm=function(){
      $scope.formVisibility=true;
      console.log($scope.formVisibility);

  }
}
