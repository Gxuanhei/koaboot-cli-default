/**
 * Greated By xuanhei on 2020/9/4
 **/

const {Api,Controller,PostMapping,GetMapping,DeleteMapping,PutMapping,FilePostMapping} = require('../Annotation/HttpAnnotion');
const IndexService = require("../Service/IndexService");
const {Init,Autowired,Test} = require("../Annotation/InitAnnontion")

/**
 * 首页api
 */
@Api("/Article")
@Controller

class IndexController{

    //自动实例化
    @Autowired(IndexService)
    indexService;
    /**
     *  增加文章
     */
    @PostMapping("/addArticle")
    addArticle(data,next){
        return this.indexService.addTest(data);
    }

    /**
     *  删除文章
     */
    @DeleteMapping("/deleteArticle")
    deleteArticle(data){
        return this.indexService.deleteTest(data);
    }

    @PutMapping("/updateArticle")
    updateArticle(data,next){
        return this.indexService.updateArticle(data)
    }

    /**
     *  查询单篇文章
     */
    @GetMapping("/selectOneTest")
    selectOneTest(data,next){
        return this.indexService.selectOneTest(data)
    }


    /**
     *  查询多篇文章
     */
    @GetMapping("/selectArticle")
    selectArticle(data,next){
        return this.indexService.selectTest(data)
    }

    /**
     *  上传文件
     */
    @FilePostMapping("/upFile")
    upFile(ctx,next){
        return this.indexService.upFile(ctx,next);
    }
}
