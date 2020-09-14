<?php
    $person = array('name' =>'xiaosun','age'=>20);

    header('Access-Control-Allow-Origin:*');
    echo json_encode($person);




 ?>