# Getting started

## 简介

用于操作和格式化数值、日期、字符的 javascript 库。

## 安装

### 使用 npm 或 yarn 安装

```bash
$ npm install inc-utils --save
# or
$ yarn add inc-utils
```

### 浏览器引入

在浏览器中使用 `script` 直接引入文件，并使用全局变量 `incUtils`。

在 npm 发布包内的 `inc-utils/dist` 目录下提供了 `inc-utils.js` `inc-utils.min.js`。

## 使用

``` js
import { nFormat } from 'inc-utils';
nFormat(1000, '0,0');
```

具体查看 [API](./api)。