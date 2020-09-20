/**
 * Greated By xuanhei on 2020/9/5
 **/

module.exports = new class ResultCode {
    SUCCESS({code=200,message="操作成功",data="",state=true}){
        const Result = {code,message,data,state};
        const response = {};
        Object.keys(Result).forEach((key)=>{
            if(Result[key]) response[key] = Result[key];
        });
        return response;
    }
    ERRO({code=500,message="操作失败",state=false}){
        const Result = {code,message,state};
        const response = {};
        Object.keys(Result).forEach((key)=>{
            if(Result[key]) response[key] = Result[key];
        });
        return response;
    }
}