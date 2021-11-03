// Leitura de Arquivos com NodeJS
const fs = require('fs');

// Forma Assíncrona (Não Bloqueante)
fs.readFile('texto.txt', (err, data)=>{
    if(err) throw err;

    console.log(data.toString());
});

//Forma Síncrona (Bloqueante)
const texto = fs.readFileSync('texto.txt');

console.log('Texto: ', texto);