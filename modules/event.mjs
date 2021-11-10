import {EventEmitter} from 'events';

class Evento extends EventEmitter {}
const meuEvento = new Evento();

// No on a gente cria ( Subscriber / Assinate)
meuEvento.on('seguranca', (x,y)=>{
    console.log(`'Executando o evento: 'seguranca', ${x} , ${y}`);
});
//No emit disparamos o evento ( Publisher / Emissor )
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salario');


// Novo Evento
meuEvento.on('encerrar', (dados)=>{
    console.log('Assinate: '+ dados);
});

meuEvento.emit('encerrar', 'Encerrando a execução da importação dos dados!');