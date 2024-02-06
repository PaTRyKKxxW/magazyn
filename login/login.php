<?php
    $conn = mysqli_connect("localhost","root","","magazyn");
    $query = "SELECT `login`,`password` FROM `admin`";
    $resoults = mysqli_query($conn,$query);
    $login = $_POST['login'];
    $pass = $_POST['pass'];
        if($login == "admin" && $pass = 1324){
              header("Location: ../admin/indexadmin.html");
        }
?>

