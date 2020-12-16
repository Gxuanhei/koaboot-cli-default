
/**
 * Greated By xuanhei on 2020/9/6
 **/

const {Autowired} = require("koabootjs").InitAnnotation;
const {Service} = require("koabootjs").ServiceAnnotation;
const IndexMapper = require("../Mapper/IndexMapper");
@Service
// @Init //增加这个注解给方法修改
class IndexService{

    @Autowired(IndexMapper)
    indexMapper;




    /**
     *  查询多条数据
     */
    selectTest(){

    }


}

module.exports = IndexService;
