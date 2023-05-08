const fs = require('node:fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'files');
const fileCopyPath =  path.join(__dirname, 'files-copy');

async function copyDir () {
    try {
        await fs.rm(fileCopyPath, { recursive: true, force: true });
        await fs.mkdir(fileCopyPath, { recursive: true });

        const files = await fs.readdir(filePath);

        for (const file of files){
            await fs.copyFile(
                path.join(__dirname, 'files', file),
                path.join(__dirname, 'files-copy', file)
            );
        }
    } catch (err) {
        console.error(err);
    }
}

copyDir();
