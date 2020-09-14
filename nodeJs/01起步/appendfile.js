var fs = require('fs');
fs.appendFile('./4.txt','11111111111',function(err){
    if (err) throw err
})
//添加