var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;

// 数据库服务器地址
var url='mongodb://127.0.0.1:27017';
// 数据库的名字
var dbName='shopping';

// 添加
var add=function(client,collections,selector,fn){
    var db=client.db(dbName);
    var collection=db.collection(collections);
    collection.insertOne(selector,function (err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}
// 删除
var deleteOne=function(client,collections,selector,fn){
    var db=client.db(dbName);
    var collection=db.collection(collections);
    collection.deleteOne(selector,function (err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}
// 删除多条
var deleteMany=function(client,collections,selector,fn){
    var db=client.db(dbName);
    var collection=db.collection(collections);
    collection.deleteMany(selector,function (err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}
// 更新一条
var updateOne=function(client,collections,selector,fn){
    var db=client.db(dbName);
    var collection=db.collection(collections);
    collection.updateOne(selector[0],selector[1],function (err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}
// 更新多条
var updateMany=function(client,collections,selector,fn){
    var db=client.db(dbName);
    var collection=db.collection(collections);
    collection.updateMany(selector[0],selector[1],function (err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}

// 查询
var find=function(client,collections,selector,fn){
    var db=client.db(dbName);
    var collection=db.collection(collections);
    collection.find(selector).toArray(function(err,data){
        if(err) throw err;
        fn(data);
        client.close()
    })
}

var methods={
    add:add,
    deleteOne:deleteOne,
    deleteMany:deleteMany,
    updateOne:updateOne,
    updateMany:updateMany,
    find:find
}
module.exports=function(type,collections,selector,fn){
    mongoClient.connect(url,function(err,client){
        methods[type](client,collections,selector,fn)
    })
}