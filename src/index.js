/**
 * @desc webpack打包入口文件  
 * @example 自动引入子目录下所有js文件
 */
let moduleExports = {};
// 查找文件：require.context(directory, useSubdirectories = false, regExp = /^\.\//);
const r = require.context('./', true, /^\.\/.+\/.+\.js$/); // 在子目录下寻找./xxx.../xxx.js
r.keys().forEach(key => {
    let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.')); 
    moduleExports[attr] = r(key); // '.../src/array/getQuery.js' 取js文件名
});

module.exports = moduleExports;