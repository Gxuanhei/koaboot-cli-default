/**
 * Greated By xuanhei on 2020/9/12
 **/
const path = require("path");
module.exports = {
    //应用启动配置
    server:{
        port: 30001, // koa运行端口
    },
    //数据库连接配置
    mysql:{
        database: {
            host: "127.0.0.1",
            user: "root",
            password: "root",
            database: "koadb", // 数据库名
        },
    },
    // //文件上传配置
    // FilePath:{
    //     writePath:`${path.resolve(__dirname, '../FileStatic/images')}/`,
    //     outPutPath:""
    // },
    //静态资源路径
    staticPath:path.resolve(__dirname, '../FileStatic/')
};
