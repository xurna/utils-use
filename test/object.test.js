describe('Object API:', function () {
  describe('#deepClone()', function () {
    it(`person deepEqual dutilsss.deepClone(null) should return true`, function () {
      let person = null
      assert.deepEqual(person, dutilsss.deepClone(person))
    });

    it(`person deepEqual dutilsss.deepClone('SlaneYang') should return true`, function () {
      let person = 'SlaneYang'
      assert.deepEqual(person, dutilsss.deepClone(person))
    });

    it(`person deepEqual dutilsss.deepClone(/正则/ig) should return true`, function () {
      let person = /正则/ig
      assert.deepEqual(person, dutilsss.deepClone(person))
    });

    it(`person deepEqual dutilsss.deepClone('1') should return true`, function () {
      let person = 1
      assert.deepEqual(person, dutilsss.deepClone(person))
    });

    it(`person deepEqual dutilsss.deepClone(new Date()) should return true`, function () {
      let date = new Date()
      assert.deepEqual(date, dutilsss.deepClone(date))
    });

    it(`person deepEqual dutilsss.deepClone(person) should return true`, function () {
      let person = {
        name: "user",
        settings: {
          first: "1",
          second: [1, 2, 3, 4, 3]
        }
      }
      assert.deepEqual(person, dutilsss.deepClone(person))
    });

    it(`person === dutilsss.deepClone(person) should return false`, function () {
      let person = {
        name: "user",
        settings: {
          first: "1",
          second: [1, 2, 3, 4, 3]
        }
      }
      assert.notStrictEqual(person, dutilsss.deepClone(person), true)
    });

    it(`person == dutilsss.deepClone(person) should return false`, function () {
      let person = {
        arr: [111, 222],
        obj: { key1: '对象', key2: '对象' },
        date: new Date(),
        reg: /正则/ig
      }
      assert.deepEqual(person, dutilsss.deepClone(person))
    });
  });

  describe('#isObject()', function () {
    it(`dutilsss.isObject({}) should return true`, function () {
      assert(dutilsss.isObject({}))
    });

    it(`dutilsss.isObject(function test(){}) should return true`, function () {
      assert(dutilsss.isObject(function test(){}))
    });

    it(`dutilsss.isObject({ one: 1 }) should return false`, function () {
      assert.equal(dutilsss.isObject({
        one: 1
      }), true)
    });

    it(`dutilsss.isObject([]) should return true`, function () {
      assert.equal(dutilsss.isObject([]), true)
    });
  });
})