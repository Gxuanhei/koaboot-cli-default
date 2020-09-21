/**
 * Greated By xuanhei on 2020/9/12
 **/
const List = [];
const IOC = require("../KoaIOC")
// const path =
function Init(Model) {
    // List.forEach((item,index)=>{
    //     let descriptor = Object.getOwnPropertyDescriptor(Model.prototype, item.key);
    //     Object.defineProperty(Model.prototype,  item.key, {
    //         ...descriptor,
    //         value: item.change,
    //         writable: false
    //     })
    // })

}

// 将类实例化
function Autowired(args,keys) {
    return function (target,key) {
        let iocKey = args.toString().match(/function\s*([^(]*)\(/)[1];
        IOC.Push(iocKey,args.prototype);
        target[key] = IOC.getObj(key);
    }
}
module.exports = {
    Init,
    Autowired
};