/**
 * Greated By xuanhei on 2020/9/4
 **/
// 主入口文件
const KoaBoot = require('../../lib/Init');
// 端口监听:
const {server} = require("../resources/application");
new KoaBoot({}).app.listen(server.port);
const mm = require("../../lib/KoaIOC");
console.log(mm);
console.log(`app started at port ${server.port}...`);