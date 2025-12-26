function read_file(file, directory){
    const fs = require("fs");
    return fs.readFileSync(`${directory}/${file}`, "utf8");
}

module.exports = {
    read_file
}