<?php
    $x =array('one','two','three');

    $person =array('name'=>'xiaoR','age'=>21,'gender'=>'male');
    foreach ($x as $value ) {
        echo $value . '<br>';
    }


    foreach ($person as $key => $value) {
        echo $key . ':' . $value . '<br>';
    }
 ?>
 <!-- php循环 -->