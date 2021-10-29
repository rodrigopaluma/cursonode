const EventEmitter = require('events');

class Evento extends EventEmitter {}

const meuEvento = new Evento();

// No on a gente cria
meuEvento.on('seguranca', (x,y)=>{
    console.log(`'Executando o evento: 'seguranca', ${x} , ${y}`);
});

//No emit disparamos o evento
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salario');
