describe('Storage API:', function () {
  describe('#getCookie()', function () {
    before(function () {
      dutilsss.setCookie('test', 'getTestValue')
    })
    it(`dutilsss.getCookie('test', 'getTestValue') should return true`, function () {
      assert(dutilsss.getCookie('test') === 'getTestValue')
    })
    it(`dutilsss.getCookie('empty') should return false`, function () {
      assert(dutilsss.getCookie('empty') === null)
    })
    after(function () {
      dutilsss.removeCookie('test')
    })
  })

  describe('#removeCookie()', function () {
    before(function () {
      dutilsss.setCookie('test', 'removeTestValue')
    })
    it(`dutilsss.removeCookie('test') should return false`, function () {
      dutilsss.removeCookie('test')
      assert.notEqual(dutilsss.getCookie('test') === 'removeTestValue', true)
    })
  })

  describe('#setCookie()', function () {
    it(`dutilsss.getCookie('test', 'setCookie') should return true`, function () {
      dutilsss.setCookie('test', 'setCookie')
      assert(dutilsss.getCookie('test') === 'setCookie')
    })
    after(function () {
      dutilsss.removeCookie('test')
    })
  })

  describe('#isShowOnceADay()', function () {
    beforeEach(function(){
      localStorage.removeItem('test')
    })
    it(`dutilsss.isShowOnceADay('test') should return true`, function () {
      assert.equal(dutilsss.isShowOnceADay('test'), true)
    })
    it(`dutilsss.isShowOnceADay('test') should return false`, function () {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var d = date.getDate();
      var todayKey = year.toString() + month.toString() + d.toString();
      localStorage.setItem('test',todayKey)
      assert.notEqual(dutilsss.isShowOnceADay('test'), true)
    })
    it(`dutilsss.isShowOnceADay('test') should return true`, function () {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var d = date.getDate();
      var todayKey = year.toString() + month.toString() + d.toString() + 1;
      localStorage.setItem('test',todayKey)
      assert.equal(dutilsss.isShowOnceADay('test'), true)
    })
    afterEach(function () {
      localStorage.removeItem('test')
    })
  })
})