/**
 * Greated By xuanhei on 2020/9/5
 **/
const {query} = require('../lib/mysql');
const MapperList = []
function Mapper(target,key) {
    console.log('注入Mapper...');
    MapperList.forEach((item,index)=>{
        target.prototype[item.key] = item.change;
    })
}

function Insert(sql) {
    return function (target,key,descriptor) {
        MapperList.push({
            key,
            change:async function (obj) {
                console.log("增加数据");
                console.log(obj);
                const data = await query(sql,obj);
                return data.affectedRows;
            }
        })
    }
}
function Delete(sql) {
    return function (target,key,descriptor) {
        MapperList.push({
            key,
            change:async function (obj={}) {
                console.log("删除数据");
                const data = await query(sql,obj);
                return data.affectedRows;
            }
        })
    }
}
function Update(sql) {
    return async function (target,key) {
        MapperList.push({
            key,
            change:async function (obj={}) {
                console.log("更改数据");
                const data = await query(sql,obj);
                return data.changedRows;
            }
        })
    }
}

/**
 *
 * @param sql
 * @param type Number类型 传 0 是代表返回数据为Array（多条） 传 1 是代表返回数据为Object（单条）
 * @returns {function(...[*]=)}
 * @constructor
 */

function Select(sql,type = 0) {
    return function (target,key,descriptor) {
        MapperList.push({
            key,
            change:async function (obj={}) {
                console.log("查询数据");
                if(Object.keys(obj).length>0){
                    if(type===1){
                        const value = await query(sql, obj);
                        return value[0];
                    }
                    return await query(sql,obj);
                }
                return await query(sql);

            }
        })
        // console.log(target[key])
    }
}



module.exports = {
    Mapper,
    Insert,
    Delete,
    Update,
    Select
}