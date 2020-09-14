var express = require('express');
var router = express.Router();
var mongo = require('./mongo2')
/* GET home page. */
router.get('/add', function (req, res) {
  var selector = {
    isTrue: false,
    name: req.query.userName
  }
  mongo('ins', 'del', selector, function (data) {
    if (data.result.n == 1) {
      res.send('成功')
    } else {
      res.send('失败')
    }

  })
});
router.get('/find', function (req, res) {
  mongo('find', 'del', null, function (data) {
    if (data.length == 0) {
      res.send('')
    } else {
      res.send(data)
    }
  })
})
router.post('/del', function (req, res) {
  var arr = JSON.parse(req.body.infor)
  for (var i = 0; i < arr.length; i++) {
    mongo('del', 'del', arr[i], function (data) {

    })
  }
  res.send('删除')
})

module.exports = router;