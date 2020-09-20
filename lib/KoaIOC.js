/**
 * Greated By xuanhei on 2020/9/13
 **/

//IOC容器
class IOC {
    data = {};

    constructor() {

    }

    //注入对象进入Ioc容器
    Push(name, obj) {
        console.log(name)
       const iocKey = this.changeNameToLow(name);
        Object.keys(this.data).some((key, index) => {
            if (key === iocKey) {
                throw "已存在此key的对象";
            }
        });
        this.data[iocKey] = obj;
    }

    // 获取对象实例
    getObj(name) {
        return this.data[name]
    }

    changeNameToLow(str) {
        //首字母转换成小写
        let strTemp = ""; //新字符串
        for (let i = 0; i < str.length; i++) {
            if (i == 0) {
                strTemp += str[i].toLowerCase(); //第一个
                continue;
            }
            if (str[i] == " " && i < str.length - 1) { //空格后
                strTemp += " ";
                strTemp += str[i + 1].toLowerCase();
                i++;
                continue;
            }
            strTemp += str[i];
        }
        return strTemp;
    }

}

const ioc = new IOC();
module.exports = ioc;
