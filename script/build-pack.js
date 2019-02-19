const path = require('path')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.conf')
const pkg = require('../package.json')
const rootPath = path.resolve(__dirname, '../')

// 构建全量压缩包
let building = ora('building...')
building.start()
// 删除旧文件/path.resolve:把一个路径或路径片段的序列解析为一个绝对路径，给定的路径的序列是从右往左被处理的
rm(path.resolve(rootPath, 'min', `${pkg.name}.min.js`), err => {
  if (err) throw (err)
  webpack(config, function (err, stats) {
    if (err) throw (err)
    building.stop()
    // 一个指向标准输出流(stdout)的 可写的流(Writable Stream)
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('  Build complete.\n'))
  })
})