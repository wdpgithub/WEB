var mongodb=require('mongodb')
var mongoClient=mongodb.MongoClient;
var url='mongodb://127.0.0.1:27017';
var dbName='web';
//查询
var find=function(client,collectionName,selector,fn){
    var collection=client.db(dbName).collection(collectionName);
    collection.find(selector).toArray(function(err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}
//插入
var ins=function(client,collectionName,selector,fn){
    var collection=client.db(dbName).collection(collectionName);
    collection.insert(selector,function(err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}
//更新一条
//var selector=[{age:1},{$set:{name:'fei'}}]
var updateone=function(client,collectionName,selector,fn){
    var collection=client.db(dbName).collection(collectionName);
    collection.updateOne(selector[0],selector[1],function(err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}
//更新多条
var updatemany=function(client,collectionName,selector,fn){
    var collection=client.db(dbName).collection(collectionName);
    collection.updateMany(selector[0],selector[1],function(err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}
//删除
var del=function(client,collectionName,selector,fn){
    var collection=client.db(dbName).collection(collectionName);
    collection.deleteOne(selector,function(err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}
var method={
    find:find,
    ins:ins,
    updateone:updateone,
    updatemany:updatemany,
    del:del
}
module.exports=function(type,collectionName,selector,fn){
    mongoClient.connect(url,function(err,client){
        method[type](client,collectionName,selector,fn)
    })
}