# dutils

前端业务代码工具库  

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`获取链接参数值`、`url参数转对象`、`浏览器类型判断`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。

## :building_construction:  安装使用

1. 直接下载`min`目录下的[dutils.min.js](https://github.com/xurna/utils-use/blob/master/min/dutils.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="dutils.min.js"></script>
  <script>
      var OS = dutils.getOS()
  </script>
```

### npm:
``` bash
$ npm install --save-dev dutils
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const dutils = require('dutils')
const OS = dutils.getOS()
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('dutils/<方法名>')
const getOS = require('dutils/getOS')
const OS = getOS()
```
## :package:  API文档

### Array  
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等 


[arrayEqual]:https://github.com/proYang/dutils/blob/master/src/array/arrayEqual.js


- 获取url参数值~
- 判断是否每天存在一次storage ~
- getcookie
- setCookie
- 对象/数组深拷贝
- 取区间值随机数 ~
- 获取过去时间
- 将时间戳转换成时分秒
- throttle