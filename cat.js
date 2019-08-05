const fs = require('fs');
module.exports = (filePath) =>{
  fs.readFile(filePath, "utf8", (err,file) => {
    if(err){
        throw err;
    } else {

    process.stdout.write(file);
    process.stdout.write("prompt > ");
    }
});
};
