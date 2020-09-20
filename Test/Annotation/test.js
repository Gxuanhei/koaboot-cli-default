/**
 * Greated By xuanhei on 2020/9/12
 **/
const List = [];
// const path =
function Init(Model) {
    // List.forEach((item,index)=>{
    //     let descriptor = Object.getOwnPropertyDescriptor(Model.prototype, item.key);
    //     Object.defineProperty(Model.prototype,  item.key, {
    //         ...descriptor,
    //         value: new item.change(),
    //         writable: false
    //     })
    // })

}

// 将类实例化
function Autowired(args,keys) {
    return function (target,key) {
        // List.push({
        //     key:key,
        //     change: args
        // });
        target[key] = args.prototype;
    }
}

module.exports = {
  Init,
  Autowired
};