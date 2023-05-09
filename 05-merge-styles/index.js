const path = require('path');
const fs = require('fs');
const outStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));
const stylePath = path.join(__dirname, 'styles');
fs.readdir(stylePath, { withFileTypes: true }, (err, files) => {

  files.forEach(file => {
    if(!file.isDirectory()) {
      let pathFile = path.join(stylePath, file.name);
      let fileInformation = path.parse(pathFile);
      
      if (fileInformation.ext === '.css') {
        let inStream = fs.createReadStream(pathFile);
        inStream.on('data', data => {
          outStream.write(data.toString());
        });
      }
    }
  });
}) 