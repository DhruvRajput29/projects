const fs = require("fs");
const path = require("path");

const dirpath = __dirname;

fs.readdir(dirpath,(err,files)=>{
    if(err){
        console.log(err);
        return;
    }
    files.forEach((file)=>{
        const filepath = path.join(dirpath,file);
        if(fs.lstatSync(filepath).isDirectory()){
            return;
        }
        const ext = path.extname(file).slice(1);

        if(ext && ext !=="js" && ext !=="json"){
            const folder  = path.join(dirpath,ext);
            if(!fs.existsSync(folder)){
                fs.mkdirSync(folder);
            }
            fs.renameSync(
                filepath,
                path.join(folder,file)
            );
            console.log(`${file} moved to ${ext}`)
        }
    })
})