const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(5));
console.log('Antes da leitura do Arquivo');

const dados = fs.readFile('file.txt',(err, data)=> {
    if(err) throw err
    console.log('Execuntando a leitura do txt');
});

console.log('Executando o console após o arquivo');
console.log((process.hrtime()[0]/60).toFixed(5));