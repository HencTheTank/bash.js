const pwdFile = require("./pwd");
const lsFile = require("./ls");
const catFile = require("./cat");
process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd"){
        pwdFile();
    }
    if (cmd === "ls"){
        lsFile();
    }
    const cmdArray = cmd.split(' ');
    if (cmdArray[0] === 'cat')
    {
        console.log(cmdArray[1]);
       catFile(cmdArray[1]);
    }

});
