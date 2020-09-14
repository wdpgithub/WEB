var fs = require('fs');
var rs = fs.createReadStream('./1.jpg');
var ws = fs.createWriteStream('./2.jpg');
rs.on('data',function(chunk){
    ws.write(chunk)
})
rs.on('end',function(){
    console.log('写入成功');
    
})

