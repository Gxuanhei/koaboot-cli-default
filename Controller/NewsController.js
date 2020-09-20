/**
 * Greated By xuanhei on 2020/9/10
 **/


const {Api,Controller,PostMapping,GetMapping,DeleteMapping,PutMapping,FilePostMapping} = require('../Annotation/HttpAnnotion');


/**
 * 首页api
 */
@Api("/News")
@Controller
class NewsController{

    @GetMapping("/index")
    getIndex(){
        return function () {
            return "啥"
        };
    }

}