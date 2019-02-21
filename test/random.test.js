describe('Random API:', function () {
  describe('#randomNum()', function () {
    it(`10 <= dutils.randomNum(10, 1000) <= 100 should return true`, function () {
      let num = dutils.randomNum(10, 1000)
      assert(num <= 1000 && num >= 10)
    });
    it(`0 <= dutils.randomNum(10) <= 10 should return true`, function () {
      let num = dutils.randomNum(10)
      assert(num <= 10 && num >= 0)
    });
    it(`0 <= dutils.randomNum() < 1 should return true`, function () {
      let num = dutils.randomNum()
      assert(num < 1 && num >= 0)
    });
  });
})