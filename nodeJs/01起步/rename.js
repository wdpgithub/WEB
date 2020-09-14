var fs = require('fs');
//fs.rename('目标文件','修改的名字','回调函数')
fs.rename('./1.txt','./2.txt',function(err){
    if (err) throw err
})
//重命名