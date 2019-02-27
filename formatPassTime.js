/**
 * @desc   时间${startTime}距现在的已过时间
 * @param  {Date} startTime，时间戳，eg. 1551152932652
 * @return {String}
 */
function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
    time = currentTime - startTime,
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    second = parseInt(time / 1000),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (time < 0) return '时间超前，请输入过去时间'
  if (year) return year + "年前"
  if (month) return month + "个月前"
  if (day) return day + "天前"
  if (hour) return hour + "小时前"
  if (min) return min + "分钟前"
  if (second) return second + "秒前"
  else return '刚刚'
}

module.exports = formatPassTime