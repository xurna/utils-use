# dutilsss

前端业务代码工具库  

> 目的：高效率完成前端业务代码

业务开发过程中，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。

## :building_construction:  安装使用

1. 直接下载`min`目录下的[dutilsss.min.js](https://github.com/xurna/utils-use/blob/master/min/dutilsss.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="dutilsss.min.js"></script>
  <script>
      var judge = dutilsss.isObject()
  </script>
```

### npm:
``` bash
$ npm install --save-dev dutilsss
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const dutilsss = require('dutilsss')
const judge = dutilsss.isObject()
```

**推荐使用方法**  

若不需要完整引入所有函数，则只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('dutilsss/<方法名>')
const isObject = require('dutilsss/isObject')
const judge = isObject()
```
## :package:  API文档

```typescript
  /**
   * 
   * @desc   随机从数组中获取不重复的几个元素
   * @param  {Array} arr 数组
   * @param  {Number} count 随机取的个数
   * @return {Array} 
   */
  export function getRandomArrayItem(arr: Array<any>, count: number): Array<any>

  /**
   * @desc 深拷贝，结构化拷贝，支持string,number,date,reg等格式，不支持function拷贝
   * @param {Any} values 
   * @return {Any}
   */
  export function deepClone(values: any): any

  /**
   * Checks if `value` is the `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @param {Any} value The value to check.
   * @returns {Boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * isObject({})
   * // => true
   *
   * isObject([1, 2, 3])
   * // => true
   *
   * isObject(Function)
   * // => true
   *
   * isObject(null)
   * // => false
   */
  export function isObject(value: Any): boolean

  /**
  * 无参数，返回[0, 1)之间随机数
  * 有1个参数，返回[0, num]之间随机数
  * 有2个参数，返回[minNum, maxNum]之间随机数
  * 
  * @desc 生成指定范围[minNum, maxNum]的随机数
  * @param  {Number} minNum 
  * @param  {Number} maxNum 
  * @return {Number} 
  */
  export function randomNum(minNum: number, maxNum: number): number

  /**
   * 
   * @desc 获取cookie参数值
   * @param  {String} name cookie参数名
   * @return {String|null} 
   */
  export function getCookie(name: string): string | null

  /**
   * 
   * @desc   判断storage中是否当天只展示了一次
   * @param  {String} itemName storage中存储的参数名
   * @return {Boolean} true今天未展示过，false今天已展示过
   */
  export function isShowOnceADay(itemName: string): boolean

  /**
  * 
  * @desc 根据name删除cookie
  * @param  {String} name 
  */
  export function removeCookie(name: string): void

  /**
  * 
  * @desc  设置Cookie
  * @param {String} name 
  * @param {String} value 
  * @param {Number} days 
  */
  export function setCookie(name: string, value: string, days: number): void

  /**
   * @desc   时间${startTime}距现在的已过时间
   * @param  {Date} startTime，时间戳，eg. 1551152932652
   * @return {String}
   */
  export function formatPassTime(startTime: Date): string

  /**
   * @desc ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0
   * @param { Date | String } startTime ，eg. 2019-10-24 10:24:00
   * @param { Date | String } endTime ，eg. 2019-10-24 10:25:00
   * @returns { Object } { d, h, m, s } 天 时 分 秒
   */
  export function timeLeft(startTime: Date | string, endTime: Date | string): { d: number, h: number, m: number, s: number }

  /**
   * 
   * @desc   获取url参数值
   * @param  {String} name 参数名
   * @param  {String} url 链接
   * @return {String|null} 
   */
  export function getQuery(name: string, url?: URL): string | null
```