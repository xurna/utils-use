
declare namespace dutils {

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
  export function randomNum(minNum: number, maxNum: number): number


  /**
   * 
   * @desc   获取url参数值
   * @param  {String} name 参数名
   * @param  {String} url 链接
   * @return {String|null} 
   */
  export function getQuery(name: string, url?: URL): string|null
  

}

declare module "dutils" {
  export = dutils
}
