const webpack = require('webpack')
const path = require('path')

const pkg = { name: 'dutils' }

const rootPath = path.resolve(__dirname, '../')

const config = {
  mode: 'production', // 告诉webpack使用production模式的内置优化,
  entry: path.resolve(rootPath, 'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'min'),
    library: `${pkg.name}`, // 指定类库名,主要用于直接引用的方式
    libraryTarget: "umd"  // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader"
    }]
  }
}

module.exports = config