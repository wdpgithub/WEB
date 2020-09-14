## javascript 获取 N 天的日期

```javascript
function getBeforeDate(n) {
  var date = new Date();
  var month, day, s;
  date.setDate(date.getDate() + n);
  month = date.getMonth() + 1;
  day = date.getDate();
  s = (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
  return s;
}
console.log(getBeforeDate(50)); //前15天的日期
```

## 解决 python 输出乱码

```python
# -*-coding:utf-8 -*-
import io
import sys
# 改变标准输出的默认编码
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf8')
```