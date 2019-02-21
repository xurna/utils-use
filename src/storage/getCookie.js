/**
 * 
 * @desc 获取cookie参数值
 * @param  {String} name cookie参数名
 * @return {String|null} 
 */

function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2]);
  }
  else {
    return null;
  }
}

module.exports = getCookie