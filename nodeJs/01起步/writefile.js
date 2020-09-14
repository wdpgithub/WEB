var fs =require('fs');
// fs.writeFile('./3.txt','hello world',function(err){
//     if (err) throw err
// })
//写入

fs.readFile('./1.txt','utf-8',function(err,data){
    if(err) throw err
    fs.writeFile('./2.txt',data,function(err){
        if (err) throw err
    })
})