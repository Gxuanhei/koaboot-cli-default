/**
 * Greated By xuanhei on 2020/9/12
 **/
const path = require("path");
module.exports = {
    //开启IOC,默认为false
    IocState:false,
    //请求给它家的api的host
    apiHost:{
        dev:"http://localhost:8188/"
    },
    //应用启动配置
    server:{
        port: 3000, // koa运行端口
    },
    //数据库连接配置
    mysql:{
        database: {
            host: "127.0.0.1",
            user: "root",
            port:"3328",
            password: "root",
            database: "giveithome", // 数据库名
        },
    },
    //开启body中间件
    openBody:true,
    koaConfig:{
        multipart:true, // 支持文件上传
        strict:false
    },
    //开启跨域
    openCors:true,
    corsConfig:{},
    //文件上传配置
    FilePath:{
        writePath:`${path.resolve(__dirname, '../FileStatic/images')}/`,
        outPutPath:""
    },
    //静态资源路径
    staticPath:path.resolve(__dirname, '../FileStatic/')
};
