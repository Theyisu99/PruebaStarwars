
<?php

try {
    @$conexion = new PDO('mysql:host=localhost;dbname=star_wars;charset=utf8mb4', 'root', '');
} catch (Exception $ex) {
    echo "Error " . $ex->getMessage() . "<br />";
    exit();
}

$idNave = $conexion->query("SELECT pilotos.nombre as nombre_piloto,  naves.nombre as nombre_nave FROM registros, pilotos, naves WHERE pilotos.id=registros.id_piloto and naves.id=registros.id_nave;");



?>
<table border="1">
    <?php
    // $idNave=  get_object_vars($idNave);
    foreach ($idNave as $registro) {

    ?>
        <tr>

            <td>Nombre piloto : <?php echo  $registro["nombre_piloto"] ?></td>


          <td>Nombre nave: <?php echo $registro["nombre_nave"] ?></td>
        </tr>

    <?php
    }
    ?>
</table>

