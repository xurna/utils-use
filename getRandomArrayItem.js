/**
 * 
 * @desc   随机从数组中获取不重复的几个元素
 * @param  {Array} arr 数组
 * @param  {Number} count 随机取的个数
 * @return {Array} 
 */

function getRandomArrayItem(arr, count) {
  var temp_array = new Array();
  for (var index in arr) {
    temp_array.push(arr[index]);
  }
  var return_array = new Array();
  for (var i = 0; i < count; i++) {
    if (temp_array.length > 0) {
      var arrIndex = Math.floor(Math.random() * temp_array.length);
      return_array[i] = temp_array[arrIndex];
      temp_array.splice(arrIndex, 1);
    } else {
      break;
    }
  }
  return return_array;
}

module.exports = getRandomArrayItem