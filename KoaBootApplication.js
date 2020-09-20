/**
 * Greated By xuanhei on 2020/9/4
 **/
// app.js为主入口文件
require("babel-register");
require("babel-polyfill");
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
// 具体参数我们在后面进行解释
const Init = require('./lib/Init');
new Init(app);
app.use(async(ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});
// require("./Test/index");

// 端口监听:
const {server} = require("./Config/application");
app.listen(server.port);
const mm = require("./lib/KoaIOC");
console.log(mm);
console.log(`app started at port ${server.port}...`);