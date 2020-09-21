
/**
 * Greated By xuanhei on 2020/9/6
 **/

const {Autowired} = require("../../../lib/Annotation/InitAnnontion")
const {Service} = require("../../../lib/Annotation/ServiceAnnontion")
@Service
// @Init //增加这个注解给方法修改
class IndexService{
    /**
     *  查询多条数据
     */
    selectTest(){
        return "hello，world"
    }


}

module.exports = IndexService;