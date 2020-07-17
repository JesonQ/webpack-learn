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



window.love = "love"
global.love = "love"

// $ = 100
$("body").css("background","red")

let a = 100
if(a == 100){
  console.log("正确的")
}

alert("我就alert")
