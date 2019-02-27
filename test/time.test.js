describe('TIme API:', function () {
  describe('#formatPassTime()', function () {
    it(`dutilsss.formatPassTime(new Date().getTime() - 1000) === '"1秒前"' should return true`, function () {
      let time = new Date().getTime() - 6000
      assert(dutilsss.formatPassTime(time).indexOf('秒前') >0 )
    });

    it(`dutilsss.formatPassTime(new Date().getTime() - 70000) === '"1分钟前"' should return true`, function () {
      let time = new Date().getTime() - 70000
      assert(dutilsss.formatPassTime(time) === "1分钟前")
    });

    it(`dutilsss.formatPassTime(new Date().getTime() - 70000 * 60) === '"1小时前"' should return true`, function () {
      let time = new Date().getTime() - 70000 * 60
      assert(dutilsss.formatPassTime(time) === "1小时前")
    });

    it(`dutilsss.formatPassTime(new Date().getTime() - 70000 * 60 * 24) === '"1天前"' should return true`, function () {
      let time = new Date().getTime() - 70000 * 60 * 24
      assert(dutilsss.formatPassTime(time) === "1天前")
    });

    it(`dutilsss.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30) === '"1个月前"' should return true`, function () {
      let time = new Date().getTime() - 70000 * 60 * 24 * 30
      assert(dutilsss.formatPassTime(time) === "1个月前")
    });

    it(`dutilsss.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30 * 12) === '"1年前"' should return true`, function () {
      let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12
      assert(dutilsss.formatPassTime(time) === "1年前")
    });
  });

  describe('#timeLeft()', function() {
    it(`dutilsss.timeLeft('2018-10-24 10:24:00', '2018-10-24 10:24:00') should return true`, function() {
          let startTime = new Date('2018-10-24 10:24:00')
          let endTime = new Date('2018-10-24 10:24:00')
          assert.deepEqual(dutilsss.timeLeft(startTime, endTime), { d:0, h:0, m:0, s:0 })
    });
    it(`dutilsss.timeLeft('2018-10-25 10:24:00', '2018-10-24 10:24:00') should return true`, function() {
      let startTime = new Date('2018-10-25 10:24:00')
      let endTime = new Date('2018-10-24 10:24:00')
      assert.deepEqual(dutilsss.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 0 })
      });
      it(`dutilsss.timeLeft('2018-10-1 10:24:00', '2018-10-24 10:24:00') should return true`, function() {
        let startTime = new Date('2018-10-1 10:24:00')
        let endTime = new Date('2018-10-24 10:24:00')
        assert.deepEqual(dutilsss.timeLeft(startTime, endTime), { d: 23, h: 0, m: 0, s: 0 })
      });
      it(`dutilsss.timeLeft('2018-10-1 10:24:00', '2018-10-24 10:24:00') should return true`, function() {
        let startTime = new Date('2018-10-24 6:24:00')
        let endTime = new Date('2018-10-24 10:24:00')
        assert.deepEqual(dutilsss.timeLeft(startTime, endTime), { d: 0, h: 4, m: 0, s: 0 })
      });
      it(`dutilsss.timeLeft('2018-10-1 10:21:00', '2018-10-24 10:24:00') should return true`, function() {
        let startTime = new Date('2018-10-24 10:21:00')
        let endTime = new Date('2018-10-24 10:24:00')
        assert.deepEqual(dutilsss.timeLeft(startTime, endTime), { d: 0, h: 0, m: 3, s: 0 })
      });
      it(`dutilsss.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function() {
        let startTime = new Date('2018-10-24 10:23:30')
        let endTime = new Date('2018-10-24 10:24:00')
        assert.deepEqual(dutilsss.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
      });
      it(`dutilsss.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function() {
        let startTime = '2018-10-24 10:23:30'
        let endTime = new Date('2018-10-24 10:24:00')
        assert.deepEqual(dutilsss.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
      });
      it(`dutilsss.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function() {
        let startTime = new Date('2018-10-24 10:23:30')
        let endTime = '2018-10-24 10:24:00'
        assert.deepEqual(dutilsss.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
      });
      it(`dutilsss.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function() {
        let startTime = '2018-10-24 10:23:30'
        let endTime = '2018-10-24 10:24:00'
        assert.deepEqual(dutilsss.timeLeft(startTime, endTime), { d: 0, h: 0, m: 0, s: 30 })
      });
  });
})