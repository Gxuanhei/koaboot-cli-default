
/**
 * Greated By xuanhei on 2020/9/6
 **/

const IndexMapper = require("../Mapper/IndexMapper")
const ResultCode = require('../Utils/ResultCode');
const {Autowired} = require("../Annotation/InitAnnontion")
const {Service} = require("../Annotation/ServiceAnnontion")
const uploadimg = require("../Utils/FileUtil")
@Service
// @Init //增加这个注解给方法修改
class IndexService{

    //类实例化
    @Autowired(IndexMapper)
    indexMapper;

    addTest(data){
        const that = this;
        return async function () {
            let SQLDATA = {};
            try {
                SQLDATA = await that.indexMapper.addTest(data);
            }catch (e) {
                console.log(e)
            }
            if(SQLDATA&&SQLDATA===1){
                return ResultCode.SUCCESS({
                    message:"插入成功"
                });
            }
            return ResultCode.SUCCESS({
                message:"插入失败"
            });
        }
    }
    
    deleteTest(id){
        const that = this;
        return async function () {
            let SQLDATA = {};
            try {
                SQLDATA = await that.indexMapper.deleteTest(id);
            }catch (e) {
                console.log(e)
            }
            if(SQLDATA&&SQLDATA===1){
                return ResultCode.SUCCESS({
                    message:"删除成功"
                });
            }
            return ResultCode.SUCCESS({
                message:"删除失败"
            });
        }
    }
    updateArticle(data){
        const that = this;
        return async function () {
            let SQLDATA = {};
            try {
                SQLDATA = await that.indexMapper.updateTest(data);
            }catch (e) {
                console.log(e)
            }
            if(SQLDATA&&SQLDATA===1){
                return ResultCode.SUCCESS({
                    message:"更改成功"
                });
            }
            return ResultCode.SUCCESS({
                message:"更改失败"
            });
        }
    }

    /**
     *  查询单条数据
     */
    selectOneTest(id){
        const that = this;
        console.log(this.indexMapper);
        return async function () {
            return ResultCode.SUCCESS({
                data:that.indexMapper.selectOneTest(id),
                message:"查询成功"
            });
        }
    }

    /**
     *  查询多条数据
     */
    selectTest(){
        const that = this;
        return async function () {
                return ResultCode.SUCCESS({
                    data:that.indexMapper.selectTest(),
                    message:"查询成功"
                });
        }
    }

    /**
     *  上传文件
     */
    upFile(ctx,next){
        return async function () {
            const imgUrl = uploadimg(ctx);
            if (imgUrl) {
                return ResultCode.SUCCESS({
                    data:imgUrl,
                    message:"文件上传成功"
                });
            } else {
                return ResultCode.ERRO({
                    data:null,
                    message:"文件上传失败"
                });
            }
        }
    }

}

module.exports = IndexService;