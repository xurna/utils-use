const ora = require('ora')
const rm = require('rimraf')

// 替换模块文件
// 终端旋转动效
let removing = ora('removing...')
removing.start()
rm('*.js', err => {
  if (err) throw (err)
  removing.stop()
})