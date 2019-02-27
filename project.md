## npm包发布
- 修改`package.json`文件的`version`字段
- 项目打包：`npm run build`
- 项目发布：
  ```js
  //登录npm账号
  npm login
  //修改npm源
  npm set registry https://registry.npmjs.org/
  //发布
  npm publish
  ```
- 清理发布环境：`npm run remove`，提交代码到git仓库
- 恢复npm淘宝镜像源：`npm config set registry https://registry.npm.taobao.org`


## 断言接口
```js
- 判断类
assert(value, [message])
assert.ok(value, [message])
assert.equal(actual, expected, [message]) 不能比较数组，对象，相当于==比较，不需要比较类型
assert.strictEqual(actual, expected, [message]) 不能比较数组，对象，相当于===比较，需要比较类型
assert.deepEqual(actual, expected, [message]) 能比较数组，对象，相当于==比较，不需要比较类型
assert.deepStrictEqual(actual, expected, [message]) 能比较数组，对象，相当于===比较，需要比较类型
assert.notEqual(actual, expected, [message])
assert.notStrictEqual(actual, expected, [message])
assert.notDeepEqual(actual, expected, [message])
assert.notDeepStrictEqual(actual, expected, [message])

- 消息类
assert.fail(actual, expected, message, operator)
assert.throws(block, [error], [message])
assert.doesNotThrow(block, [message])
assert.ifError(value)
```