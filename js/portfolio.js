const fs = require('fs');
var files = fs.readdirSync("./images/portfolio/photo_kamikouchi/");             
files.forEach(file => {console.log(file);});
