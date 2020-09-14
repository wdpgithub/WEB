<?php
    //字符串
    $txt1 = 'hello';
    $txt2 = "world";

    $txt3 = $txt1 . ' '. $txt2;

    echo $txt3 . '<br>';//hello world


    //字符串中字符
    echo $txt3[4];//o
    echo '<br>';
    echo strlen($txt3);//11
    echo '<br>';
    echo strpos($txt3,'he');//0
    echo '<br>';

    $int = 3;
    $flooat = 3.3;


    $bool = true;

    // PHP数组
    //1.数值数组
    $numbers = array(1,2,3,4,5);
    echo $numbers[2];//3
    //2.关联数组
    $person = array('name'=>'xiaohong','age'=>20);
    echo "<br>";
    echo $person['name'];//xiaohong
    $person['name'] ='xiaoli';
    echo "<br>";
    echo $person['name'];//xiaoli


 ?>

 <!-- 变量类型 -->