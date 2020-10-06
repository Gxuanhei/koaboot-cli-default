/**
 * Greated By xuanhei on 2020/9/4
 **/
// 主入口文件
const {KoaBoot} = require('koabootjs');
// 端口监听:
const {server} = require("../resources/application");
new KoaBoot({}).app.listen(server.port);
console.log(`app started at port ${server.port}...`);