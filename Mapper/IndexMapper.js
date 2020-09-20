/**
 * Greated By xuanhei on 2020/9/6
 **/

const {Mapper,Insert,Delete,Update,Select} = require('../Annotation/MapperAnnotion')

@Mapper
class IndexMapper {

    /**
     *  增加数据
     */
    @Insert("insert into test set name=:name,age=:age")
    addTest(obj){}

    /**
     *  删除数据
     */
    @Delete("DELETE FROM test WHERE id=:id")
    deleteTest(id){}

    /**
     *  删除数据
     */
    @Update("UPDATE test SET name=:name,age=:age WHERE id=:id")
    updateTest(data){}

    /**
     *  查询多条数据
     */
    @Select("select * from test where id=:id",1) //0为默认返回数组 1为返回对象，默认可以不传
    selectOneTest(id){}

    /**
     *  查询多条数据
     */
    @Select("select * from test")
    selectTest(){}
}
module.exports = IndexMapper;