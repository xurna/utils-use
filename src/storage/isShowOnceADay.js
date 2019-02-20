/**
 * 
 * @desc   判断storage中是否当天只展示了一次
 * @param  {String} itemName 存储的参数名
 * @return {Boolean} 
 */

function isShowOnceADay(itemName) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var d = date.getDate();
  var todayKey = year + month + d;
  if (localStorage && localStorage.getItem(itemName) !== todayKey) {
    // 如果今天未设置，则设置今天的key
    localStorage.setItem(itemName, todayKey);
    return true;
  }
  return false;
}

module.exports = isShowOnceADay