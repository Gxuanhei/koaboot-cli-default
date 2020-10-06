/**
 * Greated By xuanhei on 2020/9/10
 **/


const {Api,Controller,PostMapping,GetMapping,DeleteMapping,PutMapping,FilePostMapping} = require('koabootjs').HttpAnnotation;
const {Init,Autowired,Test} = require("koabootjs").InitAnnotation;
const IndexService = require("../Service/IndexService");
/**
 * 首页api
 */
@Api("/Test")
@Controller
class NewsController{

    @Autowired(IndexService)
    indexService

    @GetMapping("/index")
    getIndex(){
        return function (){
            return "Hello,world"
        }
    }

    @GetMapping("/index1")
    getIndex2(){
        const that = this;
        return function (){
            return that.indexService.selectTest();
        }
    }

}