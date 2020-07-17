// 注意这里写commonjs语法
let { resolve } = require("path")

module.exports = {
  entry: "./src/js/app.js",  // 入口配置
  output: {
    filename: "./js/app.js",
    path: resolve(__dirname, "build")
  },
  mode: "production",
  // 配置规则
  module: {
    rules: [
      // less文件编译
      {
        test: /\.less$/,  		// 检查文件是否以.less结尾（检查是否是less文件）
        use: [					// 数组中loader执行是从下到上，从右到左顺序执行
          'style-loader', 	// 创建style标签，添加上js中的css代码
          'css-loader', 		// 将css以commonjs方式整合到js文件中
          'less-loader' 		// 将less文件解析成css文件
        ]
      },
      // eslint 语法检查
      {
        test: /\.js$/,                  //只检测js文件
        exclude: /node_modules/,        //排除node_modules文件夹
        enforce: "pre",                 //提前加载使用
        use: {
          loader: "eslint-loader"		//使用eslint-loader解析
        }
      }
    ]
  },
}