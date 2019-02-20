/**
 * 无参数，返回[0, 1)之间随机数
 * 有1个参数，返回[0, num]之间随机数
 * 有2个参数，返回[minNum, maxNum]之间随机数
 * 
 * @desc 生成指定范围[minNum, maxNum]的随机数
 * @param  {Number} minNum 
 * @param  {Number} maxNum 
 * @return {Number} 
 */
function randomNum(minNum, maxNum) {
  var max = 0, min = 0;
  minNum <= maxNum ? (min = minNum, max = maxNum) : (min = maxNum, max = minNum);
  switch (arguments.length) {
    case 1:
      return Math.floor(Math.random() * (max + 1));
      break;
    case 2:
      return Math.floor(Math.random() * (max - min + 1) + min);
      break;
    default:
      return Math.random();
      break;
  }
}

module.exports = randomNum;