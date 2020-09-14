<?php
    $user = $_POST['user'];
    $password = $_POST['password'];

    if ($user == '中文' && $password == '123456') {
        echo '{"result":true}';
     } else{
        echo '{"result":false}';
     }

?>
<!-- php运行环境 -->