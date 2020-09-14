# python

`python最流行的发行版Anaconda`

## 学习 python 编程的利器

1. [Python 官方文档](https://www.python.org/doc)
2. [ipython](https://www.ipython.org/)
3. [jupyter notebook](http://jupyter-notebook.readthedocs.io/en/latest/)
4. [PyCharm](https://jetbrains.com/pycharm/)
5. [Pip](https://pip.pypa.io/en/stable/installing/)

## 基本数据类型

1. 整数(int)
2. 浮点数(float)
3. 字符串(str)
4. 布尔值(bool)

## 序列

> 序列是指它的成员都是有序排列,并且可以通过下标偏移量访问到它的一个或多个成员

1. 字符串 "abcd"
2. 列表 [0,"abacd"](可变更)
3. 元组 ("abc","def")(不可变更)

> 序列的基本操作

- 成员关系操作符 `(not) in`
- 连接操作符 `+`
- 重复操作符 `*`
- 切片操作符 `[:]`

## 条件语句

`if语法:`

> 单个条件判断

```python
if 表达式:
    代码块
else:
    代码块
```

> 多个条件判断

```python
if 表达式:
    代码块
elif 表达式:
    代码块
else:
    代码块
```

## 循环语句

`while语法`

```python
while 表达式:
    代码块
```

`for语法`

```python
for 迭代变量 in可迭代对象:
    代码块
```

## 映射的类型:字典

> 字典 包含哈希值和指向的对象 `{"哈希值":"对象"}`={"width":80}

`语法进阶`

> 列表推导式,字典推导式

### 文件内建函数和方法

- open() 打开文件
- read() 输入(读取)
- readline()/readlines() 输入一行(读取一行)/输入多行(读取多行)
- seek() 文件内移动(第一个参数代表偏移位置,第二个参数 0 表示从文件开头偏移 1 表示冲当前位置偏移 2 从文件结尾)
- write() 输出(写入)
- close() 关闭文件
- tell() 返回文件操作标记的当前位置，以文件的开头为原点

### 异常`!=`错误

```python
异常是在出现问题是采用正常控制以外的动作
异常处理的一般流程是:`检测错误,引发异常`;对异常进行捕获的操作
```

`语法`

```python
try:
    <监控异常>
except Exception[,reason]:
    <异常处理的代码>
finally:
    <无论异常是否发生都执行>
```