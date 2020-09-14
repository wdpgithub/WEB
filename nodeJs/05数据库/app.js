var mongo= require('./mongo2');
console.log(mongo);
mongo('find','peng',null,function(data){
    console.log(data);
    
})