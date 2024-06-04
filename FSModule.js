const fs = require('fs');

fs.readFile('Example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});


const path = require('path');

const filePath = '"C:\Users\srikanth\eclipse-workspace\Hello\src\WebProgramming\BuiltInModules\Example.txt"';
console.log('File Directory:', path.dirname(filePath));
console.log('File Name:', path.basename(filePath));
console.log('File Extension:', path.extname(filePath));