/**
 * Greated By xuanhei on 2020/9/12
 **/
// require("babel-register");
// require("babel-polyfill");

const {Init,Autowired} = require("./Annotation/test");
const Admin = require("./admin")
// class Best{
//     sayH(){
//         console.log("adas")
//     }
// }
// @Init
// class Class {
//
//     @Autowired(Best,"say")
//     sayHi() {
//         console.log(this.say)
//     }
// }
@Init
class Test{
    @Autowired(Admin)
    Init(){}
}


const jj = new Test();
// console.log(jj.Init.sayHi());