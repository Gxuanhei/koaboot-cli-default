/**
 * Greated By xuanhei on 2020/9/5
 **/

/**
 * 注入注解
 * @type {*|module:koa-router|Router|undefined}
 */

let IOC = require("../lib/KoaIOC")

const Router = require('koa-router')();
let ApiAddress = "";
function Api(url = "") {
    ApiAddress = url;
    return function () {
        console.log('注入Api头部信息...');
        //修改
    }
}

function Controller(target) {
    console.log('注入控制器...');

}

function GetMapping(url) {
    console.log('注入路由接口...');
    console.log('注入路由接口...');
    return function (target,key) {

        Router.get(ApiAddress+url,  async (ctx, next) => {
            let data = null;
            if(typeof target[key](ctx.request.query || ctx.query, next) === "function"){
                data = await target[key](ctx.request.query || ctx.query, next)();
                if(typeof data === "string"){
                    ctx.response.body = data;
                    return "ok";
                }
                if(Array.isArray(data)){
                    ctx.response.body = data;
                    return "ok";
                }
                ctx.response.body = {
                    ...data,
                    data:await data['data']
                };
            }else {
                data = target[key](ctx.request.query || ctx.query, next);
                ctx.response.body = data;
            }
        });
    }
}
function PostMapping(url) {
    console.log('注入路由接口...');
    return function (target,key) {
        Router.post(ApiAddress+url, async (ctx, next) => {
            //写入body
            console.log(ctx.request.body)
            let data = null;
            if(typeof target[key](ctx.request.body, next) === "function"){
                data = await target[key](ctx.request.body, next)();
                if(typeof data === "string"){
                    ctx.response.body = data;
                    return "ok";
                }
                if(Array.isArray(data)){
                    ctx.response.body = data;
                    return "ok";
                }
                ctx.response.body = {
                    ...data,
                    data:await data['data']
                };
            }else {
                data = target[key](ctx.request.body, next);
                ctx.response.body = data;
            }

        });
    }
}
function DeleteMapping(url) {
    console.log('注入路由接口...');
    return function (target,key) {
        Router.delete(ApiAddress+url,  async (ctx, next) => {
            let data = null;
            if(typeof target[key](ctx.request.query || ctx.query, next) === "function"){
                data = await target[key](ctx.request.query || ctx.query, next)();
                if(typeof data === "string"){
                    ctx.response.body = data;
                    return "ok";
                }
                if(Array.isArray(data)){
                    ctx.response.body = data;
                    return "ok";
                }
                //写入body
                ctx.response.body = {
                    ...data,
                    data:await data['data']
                };
            }else {
                data = target[key](ctx.request.query, next);
                ctx.response.body = data;
            }
        });

    }
}
function PutMapping(url) {
    console.log('注入路由接口...');
    return function (target,key) {
        Router.put(ApiAddress+url, async (ctx, next) => {
            //写入body
            let data;
            if(typeof target[key](ctx.request.body, next) === "function"){
               data = await target[key](ctx.request.body, next)();
                if(typeof data === "string"){
                    ctx.response.body = data;
                    return "ok";
                }
                if(Array.isArray(data)){
                    ctx.response.body = data;
                    return "ok";
                }
                //写入body
                ctx.response.body = {
                    ...data,
                    data:await data['data']
                };
            }else {
                data = target[key](ctx.request.query, next);
                ctx.response.body = data;
            }
            console.log(ctx.request.body)
        });
    }
}

function FilePostMapping(url){
    console.log('注入路由接口...');
    return function (target,key) {
        Router.post(ApiAddress+url, async (ctx, next) => {
            //写入body
            console.log(ctx.request.files)
            const data = await target[key](ctx, next)();
            ctx.response.body = {
                ...data,
                data:await data['data']
            };
        });
    }
}




module.exports = {
    Api,
    Controller,
    GetMapping,
    PostMapping,
    DeleteMapping,
    PutMapping,
    FilePostMapping,
    Router
}