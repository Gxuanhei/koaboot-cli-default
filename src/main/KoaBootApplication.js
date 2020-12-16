/**
 * Greated By xuanhei on 2020/9/4
 **/
// 主入口文件
const {KoaBootConfiguration} =require("koabootjs");
@KoaBootConfiguration
class KoaBootApplication{
    main(App){
        //此处暴露使用koa的地方
        console.log(App);
        App.use(async(ctx, next) => {
            console.log("我被调用了");
            await next();
        });
    }
}
