describe('Storage API:', function () {
  describe('#getCookie()', function () {
    before(function () {
      dutils.setCookie('test', 'getTestValue')
    })
    it(`dutils.getCookie('test', 'getTestValue') should return true`, function () {
      assert(dutils.getCookie('test') === 'getTestValue')
    })
    it(`dutils.getCookie('empty') should return false`, function () {
      assert(dutils.getCookie('empty') === null)
    })
    after(function () {
      dutils.removeCookie('test')
    })
  })

  describe('#removeCookie()', function () {
    before(function () {
      dutils.setCookie('test', 'removeTestValue')
    })
    it(`dutils.removeCookie('test') should return false`, function () {
      dutils.removeCookie('test')
      assert.notEqual(dutils.getCookie('test') === 'removeTestValue', true)
    })
  })

  describe('#setCookie()', function () {
    it(`dutils.getCookie('test', 'setCookie') should return true`, function () {
      dutils.setCookie('test', 'setCookie')
      assert(dutils.getCookie('test') === 'setCookie')
    })
    after(function () {
      dutils.removeCookie('test')
    })
  })

  describe('#isShowOnceADay()', function () {
    beforeEach(function(){
      localStorage.removeItem('test')
    })
    it(`dutils.isShowOnceADay('test') should return true`, function () {
      assert.equal(dutils.isShowOnceADay('test'), true)
    })
    it(`dutils.isShowOnceADay('test') should return false`, function () {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var d = date.getDate();
      var todayKey = year.toString() + month.toString() + d.toString();
      localStorage.setItem('test',todayKey)
      assert.notEqual(dutils.isShowOnceADay('test'), true)
    })
    it(`dutils.isShowOnceADay('test') should return true`, function () {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var d = date.getDate();
      var todayKey = year.toString() + month.toString() + d.toString() + 1;
      localStorage.setItem('test',todayKey)
      assert.equal(dutils.isShowOnceADay('test'), true)
    })
    afterEach(function () {
      localStorage.removeItem('test')
    })
  })
})