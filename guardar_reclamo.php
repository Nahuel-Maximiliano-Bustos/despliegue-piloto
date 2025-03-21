<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"] ?? "";
    $telefono = $_POST["telefono"];
    $direccion = $_POST["direccion"];
    $comentarios = $_POST["comentarios"];
    $latitud = $_POST["latitud"];
    $longitud = $_POST["longitud"];

    $conn = new mysqli("localhost", "usuario", "password", "base_de_datos");

    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    $sql = "INSERT INTO reclamos (nombre, apellido, email, telefono, direccion, latitud, longitud, comentarios)
            VALUES ('$nombre', '$apellido', '$email', '$telefono', '$direccion', '$latitud', '$longitud', '$comentarios')";

    if ($conn->query($sql) === TRUE) {
        mail("gestion@example.com", "Nuevo Reclamo", "Se ha recibido un nuevo reclamo.");
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }

    $conn->close();
}
?>