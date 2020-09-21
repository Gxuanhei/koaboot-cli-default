/**
 * Greated By xuanhei on 2020/9/7
 **/

const Mysql = require('mysql')
const {mysql} = require('../src/resources/application')
const pool  = Mysql.createPool({...mysql.database});
console.log("连接数据库成功")
const query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                resolve( err )
                throw err
            } else {
                /**
                 *  键值对自定义注入
                 * @param query
                 * @param values
                 * @returns {*}
                 */
                connection.config.queryFormat = function (query, values) {
                    if (!values) return query;
                    return query.replace(/\:(\w+)/g, function (txt, key) {
                        console.log(txt);
                        let iskey = false;
                        Object.keys(values).some((key)=>{
                            if(values[key]){
                                iskey = true;
                                return iskey;
                            }
                        })
                        if (iskey) {
                            return this.escape(values[key]);
                        }
                        return txt;
                    }.bind(this));
                };
                connection.query(sql, values, ( err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports={query}