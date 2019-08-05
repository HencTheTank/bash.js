const pwdFile = require("./pwd");
const lsFile = require("./ls");
process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd"){
        pwdFile();
    }
    if (cmd === "ls"){
        lsFile();
    }
});