var mongodb = require('mongodb'); //引入mongodb这个模块
var mongoClient = mongodb.MongoClient; //创建mongodb客户端
var url = 'mongodb://127.0.0.1:27017'; //mongodb服务器地址
var dbName = 'web'; //需要操作的数据库
mongoClient.connect(url, function (err, client) {
    if (err) throw err
    var collection = client.db(dbName).collection('peng');
    // data:返回查询的内容(储存在数组当中)

    //查询
    // collection.find().toArray(function (err, data) {
    //     if (err) throw err
    //     console.log(data);
    // 断开连接
    //     client.close()
    // })

    //删除
    collection.deleteOne({name: 'abcd'}, function (err, data) {
            if (err) throw err
                console.log(data);
                client.close()

    })

    //插入
    collection.insert({name: 'bbb'},function (err, data) {
            if (err) throw err
                console.log(data)
                client.close()
    })


    
    //更新
    collection.updateOne({ name:'bbb'},{$set:{name:'aaa'}}, function (err, data) {
            if (err) throw err
                console.log(data)
                client.close()

    })
    //更新多条
    collection.updateMany({ name:'bbb'},{$set:{name:'aaa'}}, function (err, data) {
        if (err) throw err
            console.log(data)
            client.close()

})
})