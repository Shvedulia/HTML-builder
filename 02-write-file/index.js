const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const output = fs.createWriteStream(filePath);

const { stdin, stdout } = process;

stdout.write('Добрый день. Начнем проверку. Введите текст\n')
stdin.on('data', data => {
    const text = data.toString();

    if(text.trim() === 'exit'){
        process.exit();
    } else{
        output.write(text);
    }
});

process.on('SIGINT', () => process.exit());

process.on('exit', () => stdout.write('Шалость удалась!'));