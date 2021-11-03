// Criando arquivos e pastas com NodeJS
const fs = require('fs');

// Criando pastas de um projetos
const assets = ['css', 'js', 'images','fonts','lib'];

function make(dir){
    dir.forEach((item)=> {
        // Recursive: true --> Cria as pastas mesmo que a anterior não exista
        fs.mkdir(`projeto/assets/${item}`,{recursive: true},(err)=>{
            if(err) throw err;
            console.log('Diretório criado com sucesso: ', item);
        });
    })   
}

make(assets);