// Log
console.log('Exibindo console!');

// Error
console.error(new Error('Exibindo mensagem de erro!'));

// Console Table
const carros = [ 'GM', 'FIAT', 'VW', 'Renault', 'Honda', 'Hyundai'];
console.table(carros);

// Objetos
const dados = { name: 'Rodrigo Paluma', empresa: 'Nitryx Consulting'}
console.table(dados);

// Contagem
console.count('processo');
console.count('processo');
console.count('processo');

console.log('Resetando processo');
console.countReset('processo');

console.count('processo');

// Calcular tempor
console.time('contador');
for (let index = 0; index < 100; index++) {
    console.log('-');
}
console.timeEnd('contador');

// Verificação
console.assert(true, 'Faça alguma coisa');
console.assert(false, 'Ih rapaz %s, que pena', 'não funcionou');

// Reseta tudo
//console.clear(); // Limpa todos os dados do console