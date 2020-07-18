// 导入
import {name} from "./m1";
console.log(name);

import * as m2 from "./m2";
console.log(m2);

import m3 from "./m3";
console.log(m3);

// 引入json
import test from "../json/test.json"
console.log(test)

// 引入less
import "../less/test1.less"
import "../less/test2.less"

// polyfill 解决旧浏览器高级语法问题  promise
import '@babel/polyfill';

window.love = "love"
global.love = "love"

// $ = 100
$("body").css("background","red")
// 错误演示  map
// ;console.og(111)

let a = 100
if(a == 100){
  console.log("正确的")
}

// alert("我就alert")

let p = new Promise((resolve, reject)=>{
  resolve("成功了")
})
p.then(
  (v)=>{console.log(v)},
  (r)=>{console.log(r)})

// 字体文件
import "../less/iconfont.less"

// 引入css
import "../css/style.css"

