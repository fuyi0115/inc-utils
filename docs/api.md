# API

## nFormat

使用 `numeral(value).format(format)` 对数值进行格式化。具体查看 [numeraljs format](http://numeraljs.com/#format)

_新增特性_：

- 异常值 `undefined` `null` `''` `NaN` `Infinity` 会直接返回。
- 新增 `'zhWYZC'` 格式类型，把数字转化为万、亿、兆的形式。

**Demo**

<code src="../src/demos/numbers.jsx" />

**语法**

> nFormat(value, format)

## sDefault

异常数据的兜底显示，默认的异常值包括 `undefined` `null` `''` `NaN` `Infinity`。

**Demo**

```js
sDefault('', '--'); // '--'
sDefault(undefined, '--'); // '--'

sDefault('a', '--', ['abc']); // 'a'
sDefault('abc', '--', ['abc']); // '--'

sDefault('', '--', ['abc'], true); // '--'
sDefault('abc', '--', ['abc'], true); // '--'
```

**语法**

> sDefault(value, defaultValue[, matcher[, containFalsely]])

**参数**

- `value`：（`any`）值。
- `defaultValue`：（`any`），值会被返回。
- `matcher`：（可选，`Arry<any>`），指定异常值，不包含默认的异常值。
- `containFalsely`：（可选，`boolean`，默认`false`），异常值是否需包含`undefined` `null` `''` `NaN` `Infinity`。

**返回值**

返回解析的值。

## sTruncate

截取文案并添加省略号。

**Demo**

```js
sTruncate('123456789012345678901234567'); // '123456789012345678901234567'
sTruncate('1234567890123456789012345678901234567890'); // '123456789012345678901234567...'
sTruncate('1234567890', 5); // '12...'
sTruncate('1234567890', 5, '..'); // '123..'
sTruncate('1234567890', 5, '......'); // '......'
```

**语法**

> sTruncate(text[, length[, omission]])

**参数**

- `text`：（`string`）要截断的字符串。
- `length`：（可选，`boolean`，默认`30`）, 允许的最大长度。
- `omission`：可选，`string`，默认`'...'`）, 超出后的代替字符。

**返回值**

截取指定长度后的字符串。

## dFormat

用于格式化日期。

**Demo**

```js
dFormat('20210102', 'YYYY年MM月DD日'); // 2021年01月02日
dFormat('', 'YYYY年MM月DD日'); // moment().format('YYYY年MM月DD日')

dFormat('', 'YYYY年MM月DD日', false); // ''
dFormat(null, 'YYYY年MM月DD日', false); // null
```

**语法**

> dFormat([value[, format[, catchException]]])

**参数**

使用 `moment.js` 进行日期处理。

- `value`：（可选，`string` | `moment`）日期值，根据 `value` 尝试转化为 `moment` 实例，所以为空时将返回当前日期。
- `format`：（可选，`string`）日期格式，[更多形式的格式化](https://momentjs.com/docs/#/displaying/)。
- `catchException`：（可选，`boolean`）默认为 `true`，当为 `false` 时，对不能转化为时间的变量，不会做任何处理，而是直接返回。

**返回值**

指定格式的日期字符串。

## dAdd

使用[moment().add](http://momentjs.cn/docs/#/manipulating/add/)进行时间增加计算。

**Demo**

```js
dAdd('20210102', 1, 'd'); // 20210103
dAdd('20210102', -1, 'd'); // 20210101

dAdd(moment(), 1, 'd', 'YYYY年MM月DD日'); // 等于moment().add(1, 'd').format('YYYY年MM月DD日')
```

**语法**

> dAdd(date, n, type[, format])

**参数**

- `date`：（`string | moment`）源日期。
- `n`：（`number`）增加的数量。
- `type`：（`string`）增加时间的类型。
- `format`：（可选，默认为有效 `moment` 实例的 `_f` 属性）返回的日期格式。

## dSubtract

用于[moment().subtract](http://momentjs.cn/docs/#/manipulating/subtract/)时间减少计算。

```js
dSubtract('20210102', 1, 'd'); // 20210103
dSubtract('20210102', -1, 'd'); // 20210101
dSubtract(moment(), 1, 'd', 'YYYY年MM月DD日'); // 等于moment().subtract(1, 'd').format('YYYY年MM月DD日')
```

**语法**

> dSubtract(date, n, type[, format])

- `date`：（`string | moment`）源日期。
- `n`：（`number`）减少的时间数量。
- `type`：（`string`）减少的时间类型。
- `format`：（可选，默认为有效 `moment` 实例的 `_f` 属性）返回的日期格式。

## drFormat

用于格式化范围日期。

**Demo**

```js
var dateRange = [moment('20210101'), moment('20210102')];
drFormat(dateRange, 'YYYY年MM月DD日'); // ['2021年01月01日', '2021年01月02日']
drFormat(dateRange, 'YYYY年MM月DD日', ['start_dt', 'end_dt']); // { start_dt: '2021年01月01日', end_dt: '2021年01月02日' }
```

**语法**

> drFormat(date, format[, startEndDateKeys])

**参数**

使用 `dFormat(value, format, true)` 进行日期处理。

- `dateRange`：（`Array<moment>` | `Array<string>`）日期范围。
- `format`：（可选，string）日期格式，[更多形式的格式化](https://momentjs.com/docs/#/displaying/)。
- `startEndDateKeys`：（可选，`Array<string>`），默认返回格式后的日期数组，当设置 `startEndDateKeys`时返回指定 key 的对象。

**返回值**

格式化后的日期范围或指定 key 的对象。

## url

使用 `encodeURIComponent` 或 `decodeURIComponent` 对 URI 进行编码或解码

**Demo**

```js
const newUrl = url('http://www.w3school.com.cn/My first/'); // 'http%3A%2F%2Fwww.w3school.com.cn%2FMy%20first%2F'
url(newUrl, true); // 'http://www.w3school.com.cn/My first/'
```

**语法**

> url(URIstring[, isDecode])

**参数**

- `URIstring`：（`string`）日期范围。
- `isDecode`：（可选，`boolean`，默认 `false`）, 是否进行解码。

**返回值**

编码或解码后的 URI。
