describe('array API:', function () {
  describe('#getRandomArrayItem()', function () {
    it(`dutils.getRandomArrayItem(items,10) should return true`, function () {
      let arr = new Array()
      for(let i = 0;i<100;i++){
        arr.push({id:i})
      }
      let num = dutils.getRandomArrayItem(arr, 10)
      assert(num)
    });
    it(`dutils.getRandomArrayItem(items,20) should return true`, function () {
      let arr = new Array()
      for(let i = 0;i<100;i++){
        arr.push({id:i})
      }
      let num = dutils.getRandomArrayItem(arr,20)
      assert.deepEqual(num.length , 20)
    });
  });
})