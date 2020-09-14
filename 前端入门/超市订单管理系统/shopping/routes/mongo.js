var mongo=require('mongodb');
var mongoClient=mongo.MongoClient;
var url='mongodb://127.0.0.1:27017';
var dbName='hehe';
//添加
var add=function(client,collections,selector,fn){
    var collection=client.db(dbName).collection(collections);
    collection.insert(selector,function(err,data){
        if(err) throw err;
        fn(data);
    })
}
var deleted=function(client,collections,selector,fn){
    var collection=client.db(dbName).collection(collections);
    collection.deleteOne(selector,function(err,data){
        if(err) throw err;
        fn(data);
    })
}
var updateOne=function(client,collections,selector,fn){
    var collection=client.db(dbName).collection(collections);
    collection.updateOne(selector[0],selector[1],function(err,data){
        if(err) throw err;
        fn(data);
    })
}
var updateMany=function(client,collections,selector,fn){
    var collection=client.db(dbName).collection(collections);
    collection.updateMany(selector[0],selector[1],function(err,data){
        if(err) throw err;
        fn(data);
    })
}
var find=function(client,collections,selector,fn){
    var collection=client.db(dbName).collection(collections);
    collection.find(selector).toArray(function(err,data){
        if(err) throw err;
        fn(data);
    })
}
var methouds={
    add:add,
    deleted:deleted,
    updateOne:updateOne,
    updateMany:updateMany,
    find:find
}
module.exports=function(type,collections,selector,fn){
    mongoClient.connect(url,function(err,client){
        methouds[type](client,collections,selector,fn)
    })
}