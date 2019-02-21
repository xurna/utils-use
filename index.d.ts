
declare namespace dutils {
  /**
   * 
   * @desc 获取cookie参数值
   * @param  {String} name cookie参数名
   * @return {String|null} 
   */
  export function getCookie(name: string): string

  /**
   * 
   * @desc   判断storage中是否当天只展示了一次
   * @param  {String} itemName storage中存储的参数名
   * @return {Boolean} true今天未展示过，false今天已展示过
   */
  export function isShowOnceADay(itemName: string): boolean

   /**
   * 
   * @desc 根据name删除cookie
   * @param  {String} name 
   */
  export function removeCookie(name: string): void

   /**
   * 
   * @desc  设置Cookie
   * @param {String} name 
   * @param {String} value 
   * @param {Number} days 
   */
  export function setCookie(name: string, value: string, days: number): void

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
