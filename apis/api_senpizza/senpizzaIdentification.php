<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');
//Please create users database inside phpmysql admin and create userdetails tabel and create id, email and username fields
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "senpizza";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//Add User
if(isset($_POST['prenom']))
{
    $sql = "INSERT INTO user (prenom, nom,email, tel, password)
        VALUES ('".$_POST['prenom']."','".$_POST['nom']."', '".$_POST['email']."', '".$_POST['tel']."', '".$_POST['password']."')";
    if (mysqli_query($conn,$sql)) {
    $data = array("data" => "You Data added successfully");
        echo json_encode($data);
    } else {
        $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($data);

    }
}
die();

?>

