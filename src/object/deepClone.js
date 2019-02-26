var isObject = require('./isObject');

/**
 * @desc 深拷贝，结构化拷贝，支持string,number,date,reg等格式，不支持function拷贝
 * @param {Any} values 
 * @return {Any}
 */

function deepClone(values) {
  var copy;

  // Handle the 3 simple types, string and null or undefined
  if (null == values || "object" != typeof values) return values;

  // Handle RegExp
  if (values instanceof RegExp) {
    var Constructor = values.constructor
    copy = new Constructor(values)
    return copy;
  }

  // Handle Date
  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  }

  // Handle Array
  if (values instanceof Array) {
    copy = [];
    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }
    return copy;
  }

  // Handle Object
  if (values instanceof Object) {
    copy = {};
    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}
const obj1 = {
  arr: [111, 222],
  obj: { key1: '对象', key2: '对象' },
  date: new Date(),
  reg: /正则/ig,
}
// var obj1 = 'yang'

var obj2 = deepClone(obj1)
console.log(obj2, obj1 === obj2)
module.exports = deepClone