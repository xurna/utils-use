describe('Object API:', function () {
  describe('#deepClone()', function () {
    it(`person deepEqual dutils.deepClone(null) should return true`, function () {
      let person = null
      assert.deepEqual(person, dutils.deepClone(person))
    });

    it(`person deepEqual dutils.deepClone('SlaneYang') should return true`, function () {
      let person = 'SlaneYang'
      assert.deepEqual(person, dutils.deepClone(person))
    });

    it(`person deepEqual dutils.deepClone(/正则/ig) should return true`, function () {
      let person = /正则/ig
      assert.deepEqual(person, dutils.deepClone(person))
    });

    it(`person deepEqual dutils.deepClone('1') should return true`, function () {
      let person = 1
      assert.deepEqual(person, dutils.deepClone(person))
    });

    it(`person deepEqual dutils.deepClone(new Date()) should return true`, function () {
      let date = new Date()
      assert.deepEqual(date, dutils.deepClone(date))
    });

    it(`person deepEqual dutils.deepClone(person) should return true`, function () {
      let person = {
        name: "user",
        settings: {
          first: "1",
          second: [1, 2, 3, 4, 3]
        }
      }
      assert.deepEqual(person, dutils.deepClone(person))
    });

    it(`person === dutils.deepClone(person) should return false`, function () {
      let person = {
        name: "user",
        settings: {
          first: "1",
          second: [1, 2, 3, 4, 3]
        }
      }
      assert.notStrictEqual(person, dutils.deepClone(person), true)
    });

    it(`person == dutils.deepClone(person) should return false`, function () {
      let person = {
        arr: [111, 222],
        obj: { key1: '对象', key2: '对象' },
        date: new Date(),
        reg: /正则/ig
      }
      assert.deepEqual(person, dutils.deepClone(person))
    });
  });

  describe('#isObject()', function () {
    it(`dutils.isObject({}) should return true`, function () {
      assert(dutils.isObject({}))
    });

    it(`dutils.isObject(function test(){}) should return true`, function () {
      assert(dutils.isObject(function test(){}))
    });

    it(`dutils.isObject({ one: 1 }) should return false`, function () {
      assert.equal(dutils.isObject({
        one: 1
      }), true)
    });

    it(`dutils.isObject([]) should return true`, function () {
      assert.equal(dutils.isObject([]), true)
    });
  });
})