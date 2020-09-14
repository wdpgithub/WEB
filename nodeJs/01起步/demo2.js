var fs = require('fs');
var obj = {
    rename: function (a, b) {
        fs.rename(a, b, function (err) {
            if (err) throw err
        })

    },
    unlink: function (c) {
        fs.unlink(c, function (err) {
            if (err) throw err
        })

    },
    writeFile: function (d, e) {
        fs.writeFile(d, e, function (err) {
            if (err) throw err
        })
    },
    appendFile: function (f, g) {
        fs.appendFile(f, g, function (err) {
            if (err) throw err
        })
    },
    readFile: function (h) {
        fs.readFile(h, 'utf-8', function (err, data) {
            if (err) throw err
            console.log(data);

        })
    }






}


//ECS6写法
var obj = {
    rename(a, b) {
        fs.rename(a, b, function (err) {
            if (err) throw err
        })

    },
    unlink(c) {
        fs.unlink(c, function (err) {
            if (err) throw err
        })

    },
    writeFile(d, e) {
        fs.writeFile(d, e, function (err) {
            if (err) throw err
        })
    },
    appendFilen(f, g) {
        fs.appendFile(f, g, function (err) {
            if (err) throw err
        })
    },
    readFile(h) {
        fs.readFile(h, 'utf-8', function (err, data) {
            if (err) throw err
            console.log(data);

        })
    }
}
module.exports = obj