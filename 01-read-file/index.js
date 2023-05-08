const path = require('path');
const filePath = path.join(__dirname,'text.txt');
const fs = require('fs');
const {stdout } = process;

const readableStream = fs.createReadStream(filePath, 'utf-8');
let data = '';
readableStream.on('data', chunk => data += chunk);
readableStream.on('end', () => stdout.write(data));
