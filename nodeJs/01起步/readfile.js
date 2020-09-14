var fs = require('fs');
// data:读取的数据
fs.readFile('./1.txt','utf-8',function(err,data){
    if(err) throw err
    console.log(data);
    
    
})
//读取