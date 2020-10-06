
/**
 * Greated By xuanhei on 2020/9/5
 **/

/**
 *  初始化启动类
 */
require("babel-register");
require("babel-polyfill");
const path = require("path");
const config = require("../src/resources/application");
const koaStatic = require("koa-static");
const Koa = require('koa');     // 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
class Init {
    // 创建一个Koa对象表示web app本身:
    constructor() {
        this.app = new Koa();
        this.init();
    }
    //初始化
    init(){
        // 具体参数我们在后面进行解释
        this.app.use(async(ctx, next) => {
            console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
            await next(); // 调用下一个middleware
        });
        this.createController();
        //开启跨域
        const cors= require('koa2-cors');
        this.app.use(cors());
        //使用文件传输中间件
        const koaBody = require('koa-body');
        this.app.use(koaBody({
            multipart:true, // 支持文件上传
            strict:false
        }));
        //配置静态资源路径
        this.staticPath(this.app);
        //配置路由
        this.getRouters(this.app);
    }

    /**
     * 静态资源路径配置
     */
    staticPath(app){
        app.use(koaStatic(config.staticPath));
    }

    /**
     * 创建控制器
     */
    createController(){
        // 给Koa注入Controller层
        const file = require('fs');
        const ControllerListPath = './src/main/Controller';
        const ControllerList = file.readdirSync(ControllerListPath);
        //需要追加的内容
        // const classContent = file.readFileSync(ControllerListPath+'/'+ControllerList[0], 'utf-8');
        // const classLast = classContent.substring(classContent.indexOf('class'),classContent.length-1);
        // const className = classLast.substring(classLast.indexOf('class'), classLast.indexOf('{')).replace('class',"").replace(/\s*/g,"");
        // const lastContent = 'module.exports = new '+className+"();";
        // console.log(lastContent)
        ControllerList.forEach((item,index)=>{
            // file.appendFile('./Controller/'+item,lastContent , (error)  => {
            //     if (error) return console.log("追加文件失败" + error.message);
            //     console.log("追加成功");
            //     require('../Controller/'+item.replace('.js',''))
            // });
            let stat = file.lstatSync("./src/main/Controller/"+item);
            if(stat.isFile()){
                require('../src/main/Controller/'+item.replace('.js',''))
            }
        })
    }

    /**
     * 创建数据库连接
     */
    createDB(){

    }

    /**
     *  获取路由
     * @param app
     */
    getRouters(app){
        // const bodyParser = require('koa-bodyparser');
        // app.use(bodyParser());
        app.use(require('./Annotation/HttpAnnotion').Router.routes());
    }
}

module.exports = Init;
