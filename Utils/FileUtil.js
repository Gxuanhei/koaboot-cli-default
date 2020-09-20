const path = require('path');
const fs = require('fs');
const {FilePath} = require("../Config/application")

function uploadimg(ctx,next) {
    console.log(JSON.stringify(ctx.request, null, ' '));
    const fileName = ctx.request.files["file"]["name"];
    const file = ctx.request.files["file"];
    // 创建可读流
    const render = fs.createReadStream(file.path);
    let filePath = FilePath.writePath+fileName;
    const fileDir = path.join(__dirname, '../FileStatic/images');
    if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, err => {
            console.log(err)
            console.log('创建失败')
        });
    }
    // 创建写入流
    const upStream = fs.createWriteStream(filePath);
    render.pipe(upStream);
    return filePath;
}

module.exports = uploadimg;