**`优化 JS 条件语句的五个技巧`**

- 对多个条件使用 Array.includes

- 更少的嵌套,仅早返回

- 使用默认的函数参数和解构

- 选择 Map 或对象字面量,而不是 Switch 语句(TL;DR;重构的语法 `Array.filter`)

- 所有或部分使用 Array.every & Array.some 的条件

**`变量`**

  我们可以声明变量来存储数据。可以通过使用 var、let 或者 const 来完成。

- let – 新时代的变量声明方式。Chrome（V8）中代码必须开启严格模式以使用 let。

- var – 旧时代的变量声明方式。一般情况下，我们不会使用它。但是， 我们需要知道 var 和 let 的微妙差别，以防你需要它们。

- const – 类似于 let，但是变量的值无法被修改。

1. 变量命名

javascript 的变量命名有两个限制:

- 变量名称必须仅包含字母,数字,符号\$ and \_

- 首字母必须非数字

```html
  - 大小写的影响 : 命名为 apple 和 AppLE 的变量是不同的两个变量。
  - 允许非英文字母，但不推荐
  - 未采用 use strict 下的赋值
  - 保留字 : 比如，单词 let、class、return、function 被保留无法用作变量命名
```

1. 常量(使用大写和下划线命名)

声明一个常数(不变)变量,可以使用 const 而非 let,
使用 const 声明的变量称为“常量”。它们不能被修改

**`数据类型`**

JavaScript 中有七种基本的类型。

**`1.`** number 用于任何类型的数字：整数或者浮点数除了常规的数字,还包括所谓的"特殊数值"也属于这种类型：Infinity(无穷大 ∞)、-Infinity 和 NaN。

**`2.`** string 用于字符串。一个字符串可以包含一个或多个字符，所以没有单独的单字符类型。

```html
在 JavaScript 中，有三种包含字符串的方式。
   1. 双引号： "Hello"
   2. 单引号： 'Hello'
   3. 反引号： `Hello`
双引号和单引号都是"简单"引用，在 JavaScript 中两者并没有什么差别。
反引号是功能扩展的引用，允许通过 ${…}，将变量和表达式嵌入到字符串中
```

**`3.`** boolean 用于 true 和 false。

**`4.`** null 用于未知的值 —— 只有一个 null 值的独立类型。

**`5.`** undefined 用于未定义的值 —— 只有一个 undefined 值的独立类型。

**`6.`** object 用于更复杂的数据结构。

**`7.`** symbol 用于唯一的标识符。

typeof 运算符可以查看变量的类型。

- 两种形式：typeof x 或者 typeof(x)。

- 返回的类型的字符串，比如 "string"。

- null 返回 "object" —— 这是语言中的一个错误，实际上它并不是一个对象。

## **`类型转换`**

有三种常用的类型转换：`转换为 string 类型、转换为 number 类型和转换为 boolean 类型`

- ## **ToString —— 输出内容时 ToString 发生转换，或通过 String(value) 进行显式转换。原始类型值的 string 类型转换通常是可预见的。**

* **ToNumber – 进行算术操作时发生 ToNumber 转换，或通过 Number(value) 进行显式转换。**

`ToNumber 转换遵循以下规则`

| 值           | 结果                                                                 |
| ------------ | -------------------------------------------------------------------- |
| undefined    | NaN                                                                  |
| null         | 0                                                                    |
| true / false | 1 / 0                                                                |
| string       | 字符串“按原样读取”，两端的空白被忽略。空字符串变成 0。出错变成 NaN。 |

- **ToBoolean – 进行逻辑操作时发生 ToBoolean 转换。或通过 Boolean(value) 进行显式转换。**

`ToBoolean 遵循以下规则：`

| 值                          | 结果  |
| --------------------------- | ----- |
| 0, null, undefined, NaN, "" | false |
| 其他值                      | true  |

`上述的大多数规则都容易理解和记忆。经常犯错的例外有：`

- undefined 进行 ToNumber 时变成 NaN，而非 0。

- "0" 和只有空格的字符串(比如：" " )在进行 ToBoolean 变成 true。

## **`交互`**

1. `alert`
   显示信息。

2. ##### `prompt`

   显示信息要求用户输入文本。点击确定返回文本，或者点击取消或按下 Esc 键，对于所有浏览器来说，其返回值都是。
   prompt 函数接收两个参数：

```javascript
    result = prompt(title[, default]);`
```

- `title`
  显示给用户的文本
- `default`
  可选的第二个参数，指定 input 框的初始值。

3. `confirm`
   显示信息等待用户点击确定或取消。点击确定返回 true，点击取消或 Esc 键返回 false。

上述所有方法共有两个限制：

- 模态窗口的确切位置由浏览器决定。通常在页面中心。

- 窗口的确切外观还取决于浏览器。我们不能修改它。

## **`运算符`**

术语 :`一元运算符`、`二元运算符`、`运算元`,运算元 ——运算符应用的对象

1. 字符串连接功能,二元运算符 +

2. 数字转化功能,一元运算符 +

3. 运算符优先级(一元运算符优先级高于二元运算符)

4. 求余运算符 %

5. 幂运算符 \*\*

6. 自相加 ++ 自相减 --

7. 位运算符

   - 按位与 &
   - 按位或 |
   - 按位异或 ^
   - 按位非 ~
   - 左移 <<
   - 右移 >>
   - 无符号右移 >>>

8. 逗号运算符 ,

### **`循环`**

三种类型的循环 :

- while —— 每次迭代之前都要检查条件。

- do..while —— 每次迭代后都要检查条件。

- for (; ; ) —— 每次迭代之前都要检查条件，可以使用其他设置。
  通常使用 while(true) 来构造“无限”循环。这样的循环就像任何其他循环一样，可以通过 break 指令来终止。

如果我们不想在当前迭代中做任何事，并且想要转移至下一次迭代，那么 continue 指令就会执行它。

break/continue 支持循环前的标签。标签是 break/continue 避免嵌套并转到外部循环的唯一方法。

## **`函数`**

## 函数声明像这样

```js
function name(parameters, delimited, by, comma) {
  /* code */
}
```

- 作为参数传递给函数,值被复制到其局部变量
****
- 函数可以访问外部变量。但它只能从内到外起作用。函数外部的代码看不到它的局部变量。

- 函数可以返回值。如果没有，则其结果是 undefined。

#### 函数命名

- 名称应该清楚地描述函数的功能。当我们在代码中看到一个函数调用时，一个好的名称立即让我们了解它所做的和返回的事情。

- 函数是一种行为，所以函数名通常是动词。

- 有许多优秀的函数前缀，如 create…、show…、get…、check… 等等。使用它们来提示函数的作用。

#### 函数表达式和箭头函数

- 函数是值。他们可以在代码的任何地方分配，复制或声明。

- 如果函数在主代码流中声明为单独的语句，那就称为函数声明。

- 如果该函数是作为表达式的一部分创建的，则称其为函数表达式。

- 函数声明在代码块执行之前处理。它们在代码块中随处调用。

- 函数表达式在执行流程到时创建。

```html
在大多数情况下，当我们需要声明一个函数时，函数声明是可取的，因为它在声明本身之前是可见的。这给了我们更多的代码组织的灵活性，并且通常更具可读性。
```

箭头函数非常适合单行调用，以下是其两个特点。

1. 没有大括号：(...args) => expression — 右侧是一个表达式：该函数对其进行运行并返回结果。

2. 有大括号：(...args) => { body } — 括号允许我们在函数中写入多个语句，但是我们需要一个显式的 return 来返回一些东西。

## **`chrome 调试`**

[完整手册](https://developers.google.com/web/tools/chrome-devtools)

`有三种方式暂停一个脚本`

1. 一个断点

   ## 

2. debugger 声明

3. 一个错误

## **`注释`**

```html
一个好的开发者的标志之一就是他的注释：它们的存在甚至它们的缺席。
好的注释可以使我们更好的维护代码，并且在很长时间之后依然可以更高效地回到代码中和使用其功能。
```

注释这些内容

- 整体架构，高层次的观点。

- 函数的用法。

- 重要的解决方案，特别是在不是很明显时。

- 避免注释

## **`对象`**

```html
对象是具有一些特殊特性的关联数组。
```

他们存储键值对：

- 属性的键必须是字符串或者符号（通常是字符串）。

- 值可以是任何类型。

我们可以用下面的方法获取属性：

- 点符号: obj.property。

- 方括号 obj["property"]，方括号中可以使用变量 obj[varWithKey]。

其他操作：

- 删除属性：delete obj.prop。

- 检查属性是否存在："key" in obj。

- 遍历对象：for(let key in obj) 循环。

```js
对象根据引用来赋值或者复制。换句话说，变量存的不是对象的"值"，而是值的 “引用”（内存地址）。 所以复制变量或者传递变量到方法中只是复制了对象的引用。 所有的引用操作（像增加，删除属性）都作用于同一个对象。
```

深拷贝的话我们可以使用 Object.assign 或者 _.cloneDeep(obj)。
JavaScript 中还有很多其他类型的对象：

- Array 存储有序数据集合。

- Date 存储时间日期。

- Error 存储错误信息

- …等等。

### **`垃圾回收`**

- 垃圾回收是自动完成的，我们不能强制执行或是阻止执行。

- 当对象是可达状态时，它在内存中是可达的。

- 被引用与可访问（从一个根）不同：一组相互连接的对象可能整体都无法访问。

### **`Symbol 类型`**

```js
Symbol 是唯一标识符的基本类型

Symbol 使用 Symbol() 创建的，调用带有一个可选的描述。

Symbol 总是不同的值，即使它们有相同的名称。如果我们希望同名 Symbol 相等，那么我们应该使用全局注册表：Symbol.for(key) 返回（如果需要的话创建）一个以 key 作为名称的全局 Symbol。Symbol.for 的多次调用完全返回相同的 Symbol。
```

Symbol 有两个主要的使用场景:

```js
1. “隐藏” object 属性。如果需要将属性添加到 “属于” 另一个脚本或库的对象中，则可以创建 Symbol 并将其用作属性键。Symbol 属性不出现在 for..in 中，因此不回偶尔列出。另外，它不会被直接访问，因为另一个脚本没有我们的符号，所以它不会偶尔干预它的操作。

`因此我们可以使用 Symbol 属性“秘密地”将一些东西隐藏到我们需要的 object 中，但其他人不应该看到。`

2. JavaScript 使用了许多系统 Symbol，这些 Symbol 可以作为 Symbol.\* 访问。我们可以使用它们来改变一些内置行为。例如，在本教程的后面部分，我们将使用 Symbol.iterator 来迭代，Symbol.toPrimitive 来设置对象原始值的转换等等。

`从技术上说，Symbol 不是 100% 隐藏的。有一个内置方法 Object.getOwnPropertySymbols(obj) 允许我们获取所有的 Symbol。还有一个名为 Reflect.ownKeys(obj) 返回所有键，包括 Symbol。所以它们不是真正的隐藏。但是大多数库、内置方法和语法结构都遵循一个共同的协议。而明确调用上述方法的人可能很清楚他在做什么`
```

## **`对象方法与"this"`**

- 存储在对象中函数称之为『方法』。

- 对象执行方法进行『操作』，比如 object.doSomething()

- 方法可以将该对象引用为 this。

this 的值是在运行时求值的。

- 函数声明使用的 this 只有等到调用时才会有值。

- 函数可以在对象之间进行共用。

- 当函数使用『方法』语法 object.method() 调用时，调用过程中的 this 总是指向 object。

`! 请注意箭头函数有些特别：它们没有 this。在箭头函数内部访问的都是来自外部的 this 值。`

#### **`对象原始值转换`**

> 对象到原始值的转换，是由许多内置函数和操作符自动调用的，这些函数使用一个原始值作为返回值的。

`它有三种类型（暗示）`：

```js
- "string"（对于 alert 和其他字符串转换）

- "number"（对于 maths）

- "default"（少数操作）

规范明确描述了哪个操作符使用哪个暗示。极少数操作者“不知道期望什么”并使用 "default" 暗示。通常对于内置对象，"default" 暗示的处理方式与 "number" 相同，因此在实践中最后两个通常合并在一起。
```

`转换算法是`：

```js
1. 调用 obj[Symbol.toPrimitive](hint) 如果这个方法存在的话，

2. 否则如果暗示是 "string"

   - 尝试 obj.toString() 和 obj.valueOf()，无论哪个存在。

3. 否则，如果暗示 "number" 或者 "default"

   - 尝试 obj.valueOf() 和 obj.toString()，无论哪个存在

在实践中，为了记录或调试目的，仅实现 obj.toString() 作为“全捕获"方法通常就够了。
```

**`构造函数和操作符"new"`**

```js
- 构造函数或简言之，就是常规函数，但构造函数有个共同的约定，命名它们首字母要大写。

- 构造函数只能使用 new 来调用。这样的调用意味着在开始时创建空的 this，并在最后返回填充的对象
```

## **`数据类型`**

`对象类型`

`数字类型`

写非常大的数字：

```js
附加 "e" 来省略 0，e 后面的数字就是零的个数。就像：123e6 是 123 后面接 6 个零。
"e" 后面的负数将导致数字除以 1 后面接着给定数量的零。e-6 那是一百万分之一。
```

对于不同的进制：

```js
可以在十六进制（0x），八进制（0o）和二进制（0b）系统中直接写入数字。
parseInt(str，base) 解析来自任何数字系统的整数，其基数为：2≤base≤36。
num.toString(base) 将数字转换为数字系统中具有给定 base 的字符串。
```

常见的用例如下：

```js
base 可以从 2 变到 36。默认情况下它是 10。

- base=16 用于十六进制颜色，字符编码等，数字可以是 0..9 或 A..F。

- base=2 主要用于调试按位操作，数字可以是 0 或 1。

- base=36 是最大值，数字可以是 0..9 或 A..Z。整个拉丁字母用来表示一个数字。对于 36 来说，一个有趣而有用的例子是，当我们需要将一个较长的数字标识符变成较短的时候，例如做一个简短的 URL。可以简单地用基数为 36 的数字系统表示：
```

将 12pt 和 100px 等值转换为数字：

使用 `parseInt` / `parseFloat` 进行 软 转换，它从字符串中读取一个数字，然后返回错误发生前可以读取的值。

分数：

使用 Math.floor(向下舍入)，Math.ceil(向上舍入)，Math.trunc(向最近的整数舍入)，Math.round(删除小数点后的所有内容而不舍入) 或 num.toFixed(precision) 循环。
`请记住，使用分数时会损失精度。`

其他数学函数

1. Math.random() 返回从 0 到 1 的随机数(不包括 1)

2. Math.max(a,b,c,d……)/Math.min(a,b,c,d……) 从任意数量的参数中返回最大/最小值

3. Math.pow(n,power) 返回经过 n 进制转换的 power 值

`字符串`

> 特殊字符

| 字符         | 备注                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------ |
| \b           | 退格符                                                                                           |
| \f           | 换页符                                                                                           |
| \n           | 换行符                                                                                           |
| \r           | 回车符                                                                                           |
| \t           | 制表符                                                                                           |
| \uNNNN       | 16 进制的 NNNN 的 Unicode 符号,例如\u00A9 —— 是版本符号的 unicode © 。它必须是 4 个 16 进制数字  |
| \u{NNNNNNNN} | 一些罕见字符使用的两个 unicode 符号进行编码,最多占用 4 个字节。这个长的 unicode 需要它周围的括号 |

- 有 3 种类型的引号，反引号允许字符串跨越多行并嵌入表达式。

- JavaScript 中的字符串使用 UTF-16 进行编码。

- 我们可以使用像 \n 这样的特殊字符或通过使用 \u... 来操作它们的 unicode 进行字符插入。

- 获取字符时，使用 `[]`。

- 获取子字符串，使用 `slice` 或 `substring。`

- 字符串的大/小写转换，使用：`toLowerCase`/`toUpperCase。`

- 查找子字符串时，使用 `indexOf` 或 `includes`/`startsWith`/`endsWith` 进行简单检查。

- 根据语言比较字符串时使用 `localeCompare`，否则将按字符代码进行比较。

> 字符串还有其他几种有用的方法：

- str.trim() —— 删除字符串前后的空格 (“trims”)。

- str.repeat(n) —— 重复字符串 n 次。

- 更多内容细节参见[手册](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

### `数组`

数组的操作方法：

1. 栈方法

   - pop() 从末端取出一个元素

   - push() 在末端添加一个元素

2. 队列方法

   - shift() 去除队列最前端的一个元素

   - push() 在末端添加一个元素

双端队列：Javascript 中数组既可以用队列,也可以用栈。它们允许从前端/末端添加/删除元素。

1. 作用于数组末端的方法(运行比较快)

   - `pop()` 取出并返回数组的最后一个元素

   - `push()` 在数组末端添加元素

2. 作用于数组前端的方法(运行比较慢)

   - `shift()` 取出数组的第一个元素并返回它

   - `unshift()` 在数组的前端添加元素

#### 遍历数组的元素：

- for(let i=0; i < arr.length; i++) ——运行的最快，可兼容旧版本浏览器
- for(let item of arr) ——现代语法，只能访问 item
- for(let in arr) ——永远不会使用

#### `添加/移除数组元素的其他几种方法：`

- `splice()` —— 添加，删除和插入元素

- `slice()` —— 从已有的数组中返回选定的元素

- `concat()` ——将数组与其他数组和/或元素结合在一起

#### `查询数组`

`indexOf()/lastIndexOf() 和 includes()` (对数组元素而不是字符进行操作)

- arr.indexOf(item, from) 从索引 from 查询 item，如果找到返回索引，否则返回 -1。

- arr.lastIndexOf(item, from) — 和上面相同，只是从尾部开始查询。

- arr.includes(item, from) — 从索引 from 查询 item，如果找到则返回 true。

`find() 和 findIndex()` 返回数组的第一个元素的值 和 返回符合条件的数组第一个元素位置

```js
/*
 *item 是元素。
 *index 是它的索引。
 *array 是数组本身。
 */
let result = arr.find(function(item, index, array) {
  // 如果查询到返回 true
});
```

`filter()` 返回的是所有匹配元素组成的数组

```js
/*
 *item 是元素。
 *index 是它的索引。
 *array 是数组本身。
 */
let result = arr.filter(function(item, index, array) {
  // 如果查询到返回 true
});
```

#### `转换数组`

`map()` 返回符合结果的数组

```js
/*
 *item 是元素。
 *index 是它的索引。
 *array 是数组本身。
 */
let result = arr.map(function(item, index, array) {
  // 如果查询到返回 true
});
```

`sort()` 对数组进行排序

`reverse()` 颠倒数组中的元素的顺序

`split()和join()` 通过分隔符将字符串分割成一个数组 和 修改数组分隔符

`reduce()/reduceRight()` 用于根据数组计算单个值

`当我们需要遍历一个数组时 — 我们可以使用 forEach。`
`当我们需要迭代并返回每个元素的数据时 — 我们可以使用 map`

```js
/*
 *item — 当前的数组元素。
 *index — 当前索引。
 *arr — 数组本身。
 *previousValue — 是前一个函数调用的结果，第一次调用是初始化。
 */
let value = arr.reduce(function(previousValue, item, index, arr) {
  // ...
}, initial);
```

`迭代：forEach` 允许为数组的每个元素运行一个函数。

`其他` – Array.isArray(arr) 检查 arr 是否是一个数组。

> 注意
> `sort，reverse 和 splice 方法修改数组本身`

不常用的:

- arr.some(fn)/arr.every(fn) 检查数组。

> 在类似于 map 的数组的每个元素上调用函数 fn。如果任何/所有结果为 true，则返回 true，否则返回 false。

- arr.fill(value, start, end) — 从 start 到 end 用 value 重复填充数组。

- arr.copyWithin(target, start, end) —将其元素从 start 到 end 在 target 位置复制到 本身（覆盖现有）。

- 更多详情见[手册](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

`Lterables (可迭代对象)`

> 可以应用 `for..of` 的对象被称为可迭代的。

1. 技术上来说，可迭代对象必须实现方法 Symbol.iterator。

   - `obj[Symbol.iterator]` 的结果被称为迭代器。由它处理更深入的迭代过程。
   - 一个迭代器必须有 next() 方法，它返回一个 {done: Boolean, value: any}，这里 done:true 表明迭代结束，否则 value 就是下一个值。

2. `Symbol.iterator`方法会被 for..of 自动调用，但我们也可以直接调用。

3. 内置的可迭代对象例如字符串和数组，都实现了 Symbol.iterator。

4. 字符串迭代器能够识别 UTF-16 扩展字符。

> 有索引属性和 length 属性的对象被称为类数组对象。这种对象也许也有其他属性和方法，但是没有数组的内建方法。

#### `Map、Set、WeakMap 和 WeakSet`

> `Map`是一个键值对的集合很像 Object。但主要的区别是，Map 允许所有数据类型作为键。

主要的方法包括：

- `new Map()` – 创建 map。

- `map.set(key, value)` – 根据键（key）存储值（value）。

- `map.get(key)` – 根据键返回值，如果 map 中该键不存在，返回 undefined。

- `map.has(key)` – 如果键存在，返回 true，否则返回 false。

- `map.delete(key)`– 移除该键的值。

- `map.clear()` – 清空 map

- `map.size` – 返回当前元素个数。

#### `三种循环遍历Map:`

- `map.keys()` ——返回键的迭代器

- `map.values()` ——返回值的迭代器

- `map.entries()` ——返回[key,value]迭代器入口，for……of 循环默认使用它。

> Set 是一个值的集合，这个集合中所有的值仅出现一次。

主要方法包括：

- `new Set(iterable)` – 创建 set，利用数组来创建是可选的（任何可迭代对象都可以）。

- `set.add(value)` – 添加值，返回 set 自身。

- `set.delete(value)` – 删除值，如果该 value 在调用方法的时候存在则返回 true ，否则返回 false。

- `set.has(value)` – 如果 set 中存在该值则返回 true ，否则返回 false。

- `set.clear()` – 清空 set。

- `set.size` – 元素个数。

> Set 迭代

- `set.keys()` – 返回 set 中值的迭代对象，
- `set.values()` – 和 set.keys 一样，为了兼容 Map，
- `set.entries()` – 返回形如 [value, value] 的迭代对象，为了兼容 Map 而存在。

> WeakMap 和 WeakSet

WeakMap 仅有如下方法：

- `weakMap.get(key)`

- `weakMap.set(key, value)`

- `weakMap.delete(key, value)`

- `weakMap.has(key)`

1. WeakMap —— Map 的一个变体，仅允许对象作为键，并且当对象由于其他原因不可引用的时候将其删除。

- 它不支持整体的操作：没有 size 属性，没有 clear() 方法，没有迭代器。

1. WeakSet —— 是 Set 的一个变体，仅存储对象，并且当对象由于其他原因不可引用的时候将其删除。

- 同样不支持 size/clear() 和迭代器。

`对象的键、值、项`

> Object.keys、values、entries 三个方法

对于纯对象:

- Object.keys(obj) ——返回一个包含该对象全部的键的数组
- Object.values(obj) —— 返回一个包含该对象全部的值的数组
- Object.entries(obj) —— 返回一个包含该对象全部[key,value]键值对的数组

区别(Map 区别):
|          | Map        | Object                             |
| -------- | ---------- | ---------------------------------- |
| 调用语法 | map.keys() | Object.keys(obj),而不是 obj.keys() |
| 返回值   | 可迭代项   | (真正的)数组                       |

##### `解构赋值`

- 解构赋值允许将对象或数组立即映射到多个变量上。
- 解构对象的语法:

```js
let {prop: varName = default, ...} = object

这个表示属性prop会被赋值给变量varName,如果没有这个属性的话,就会使用默认default的值。
```

- 解构数组的语法:

```js
let [item1 = default, item2, ...rest] = array

数组的第一个元素赋值给 item1，第二个元素赋值给 item2，剩下的所有组成另一个数组 rest。
```

#### `JSON方法，toJSON`

- JSON.stringify 将对象转换为 JSON
- JSON.parse 将 JSON 转换回对象

### 排除和替换:replacer

JSON.stringify 完整语法是:

```js
let json = JSON.stringify(value[, replacer, space])

`value` 要编码的值。
`replacer` 要编码的属性数组或映射函数 function(key, value)。
`space` 文本添加缩进、空格和换行符
```

格式化:space

> JSON.stringify(value, replacer, space) 的第三个参数是用于优化格式的空格数量。

定制"toJSON"

> toJSON 既用于直接调用 JSON.stringify(room) 也可以用于嵌套对象。

JSON.parse 语法:

```js
let value = JSON.parse(str[, reviver]);

str`JSON 字符串解析。`

`reviver` 将为每个 (key,value) 对调用的可选函数（键，值）进行转换。
```

#### **`Advanced working with functions`**

##### `递归和堆栈`

- 递归是函数(自调用)的编程术语

  当一个函数调用自身时,我们称其为递归步骤。

- 一个递归定义的数据结构是指可以使用自身来定义的数据结构。

```js
list = { value , next -> list }
```

`Rest参数与spread操作符`

当我们在代码中遇到 "..." 时，它不是 Rest 参数就是 Spread 操作符。

我们可以使用下列方法区分二者：

- 若 ... 出现在函数的参数列表，那它表示的就是 Rest 参数，它会把函数多余的实参收集到一个数组中。
- 若 ... 出现在函数调用或类似的表达式中，那它就是 Spread 操作符，它会把一个数组展开为逗号分隔的元素列表。
  使用场景：

- Rest 参数用于创建可接收任意个参数的函数。
- Spread 操作符可以在函数调用传参时，把含有参数的数组展开为函数需要的参数列表形式。

这两个操作符的出现方便了我们在参数数组和参数列表间来回转换。

"旧式"的 arguments（类数组对象）也依然能够帮助我们获取函数调用时的所有参数

`旧时的"var"`

```html
var 声明变量有两点主要区别:

1. 变量没有块作用域,它们在最小函数可见;

2. 变量声明在函数开头处理
```

#### `函数对象`

```html
函数就是对象
- name —— 函数的名字。不仅仅在函数定义指定时存在，而且在复制或者对象属性中也会有。

- length ——函数定义时的入参个数。 余参不参与计数

如果函数是通过函数表达式被声明的（不是在主代码流里），它附带了名字，那么它被称为命名的函数表达式。可以用来在函数内部引用自己，或者递归调用等诸如此类场景。

而且，函数可以有额外的属性。很多知名的 JavaScript 库广泛使用了这个特点。

它们创建一个「主」函数，然后给它附加很多其它「helper」函数。比如，jquery 库创建了一个名为 $ 的函数。lodash 库创建一个 _ 函数。然后添加了 _.add、_.keyBy 以及其它属性（欲了解详情，参见 docs）。事实上，它们这么做是为了减少对全局空间的污染，这样一个库就只会产生一个全局变量。这样就降低了命名冲突的可能性。
```

#### `"new Function" 语法`

```js
let func = new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

由于历史原因,参数也可以按逗号分隔符的形式给出。

以下三种形式表现一致：

```js
new Function("a", "b", "return a + b"); // 基础语法
new Function("a,b", "return a + b"); // 逗号分隔
new Function("a , b", "return a + b"); // 逗号和空格分隔v
```

##### `调度:setTimeout和setInterval`

```js
参数说明：

`func|code` ：想要执行的函数或代码字符串。 一般传入的都是函数，介于某些历史原因，代码字符串也支持，但是不建议使用这种方式。

`delay` ：执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒）；

`arg1，arg2…` ：**要传入被执行函数**（或代码字符串）的参数列表（IE9 以下不支持）
```

- `setTimeout` 将函数的执行推迟到一段时间之后再执行

```js
let timerId = setTimeout(func|code, delay[, arg1, arg2...])
```

- `setInterval` 让函数间隔一定时间周期性执行

```js
let timerId = setInterval(func|code, delay[, arg1, arg2...])
```

##### `使用clearTimeout/clearInterval清除调度`

- 嵌套 setTimeout 比 setInterval 用起来更加灵活，同时也能保证每一轮执行的最小时间间隔。

- 0 延时调度 setTimeout(...,0) 用来安排在当前代码执行完时，需要尽快执行的函数。

setTimeout(...,0) 的一些用法示例：

- 将耗费 CPU 的任务分割成多块，这样脚本运行不会进入“挂起”状态。

- 进程繁忙时也能让浏览器抽身做其它事情（例如绘制进度条）。

#### `装饰和转发, call/apply`

装饰器是一个改变函数行为的包装器,主要工作仍由该函数来完成
为实现`cachingDecorator`,可以使用以下方法;

- 使用"func.call"作为上下文

```js
func.call(context, arg1, arg2, ...)  —— 用给定的上下文和参数调用 func。
```

- 使用"func.apply" 来传递多参数

```js
func.apply(context, args);  —— 调用 func 将 context 作为 this 和类似数组的 args 传递给参数列表。
```

#### 箭头函数

- 没有this
- 没有arguments
- 不能使用 new

## 对象、类和继承

#### 原型继承

- JavaScript 中，所有的对象都有一个隐藏的 `[[Prototype]]` 属性，它可以是另一个对象或者 `null`。
- 我们可以使用 `obj.__proto__` 进行访问（还有其他方法，但很快就会被覆盖）。
- `[[Prototype]]` 引用的对象称为“原型”。
- 如果我们想要读取 `obj` 属性或者调用一个方法，而且它不存在，那么 JavaScript 就会尝试在原型中查找它。写/删除直接在对象上进行操作，它们不使用原型（除非属性实际上是一个 setter）。
- 如果我们调用 `obj.method()`，而且 `method` 是从原型中获取的，`this` 仍然会引用 `obj`。因此方法重视与当前对象一起工作，即使它们是继承的。


#### 函数原型

- `F.prototype` 属性与 [[Prototype]] 不同。`F.prototype` 唯一的作用是：当 `new F()` 被调用时，它设置新对象的 [[Prototype]]。
- `F.prototype` 的值应该是一个对象或 null：其他值将不起作用。
- `"prototype"` 属性在设置为构造函数时仅具有这种特殊效果，并且用 new 调用。

#### 原生的原型

- 所有的内置对象都遵循一样的模式：
  - 方法都存储在原型对象上（Array.prototype、Object.prototype、Date.prototype 等）。
  - 对象本身只存储数据（数组元素、对象属性、日期）。
- 基本数据类型同样在包装对象的原型上存储方法：Number.prototype、String.prototype 和                   Boolean.prototype。只有 undefined 和 null 没有包装对象。
- 内置对象的原型可以被修改或者被新的方法填充。但是这样做是不被推荐的。只有当添加一个还没有被 JavaScript 引擎支持的新方法的时候才可能允许这样做。

#### 原型方法 

