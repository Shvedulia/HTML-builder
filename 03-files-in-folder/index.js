const fs = require('node:fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'secret-folder');

async function readDir () {
    try { 
        const files = await fs.readdir(filePath, { withFileTypes: true });
        for (const file of files)
            if(file.isFile()) {
                const stat = await fs.stat(path.join(__dirname, 'secret-folder', file.name))
                const fileName = file.name.slice(0, file.name.indexOf('.'))
                const fileExtention = path.extname(file.name).slice(1)
                const fileSize = stat.size / 1024;
                console.log(`${fileName} - ${fileExtention} - ${fileSize.toFixed(3)}kb`);
            }
    } catch (err) {
        console.error(err);
    }
}

readDir();
