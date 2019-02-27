/**
 * 
 * @desc   获取url参数值
 * @param  {String} name 参数名
 * @param  {String} url 链接
 * @return {String|null} 
 */
function getQuery(name, url) {
  var reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i');
  var r = url && url.lastIndexOf('?') !== -1 ? (url.substring(url.lastIndexOf('?') + 1).match(reg)) : window.location.search.substr(1).match(reg);
  if (r !== null) {
    return unescape(r[2]);
  }
  return null;
}

module.exports = getQuery
