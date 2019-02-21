
## 断言接口
```
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