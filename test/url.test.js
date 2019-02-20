describe('Url API:', function () {
  describe('#getQuery()', function () {
    it(`dutils.getQuery('rsv_spt','https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10') deepEqual '10' should return true`, function () {
      let name = 'rsv_spt'
      let url = 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
      assert.deepEqual(dutils.getQuery(name, url), 10)
    });
  });
})