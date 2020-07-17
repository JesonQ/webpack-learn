// 注意这里写commonjs语法
let {resolve} = require("path")

module.exports = {
  entry:"./src/js/app.js",  // 入口配置
  output:{
    filename:"./js/app.js",
    path:resolve(__dirname, "build")
  },
  mode:"production"
}