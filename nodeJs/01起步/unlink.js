var fs = require('fs');
fs .unlink('./1.txt',function(err){
    if(err) throw err
})
//删除文件