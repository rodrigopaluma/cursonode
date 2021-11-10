console.log('Iniciando Módulo 2');
// require('./module-01') // Traz o arquivo inteiro
//const module01 = require('./module-01') // Traz o arquivo inteiro
const { executa, oculta} = require('./module-01')

console.log('Executando Módulo 2');

// Executando um módulo importado
//module01.executa()
//module01.oculta()

executa()
oculta()