console.log(`Nome do Arquivo: `,__filename);
console.log(`Diretório do Arquivo: `,__dirname);
console.log(`Sistema Operacional: `,process.env.OS);
console.log(`Usuário: `,process.env.USERNAME);
console.log(`Idioma: `,process.env.LANG);
console.log(`Nome do Servidor: `,process.env.COMPUTERNAME);

switch(process.argv[2]){
    case '-a' : 
        console.log('Execute rotina principal');
        break;
    case '-i' : 
        console.log('Execute Instalação');
        break;
    case '-q' : 
        console.log('Eencerrando aplicação');
        process.exit();
        break;
    default :
        console.log('Parametro Invalido')
}

console.log(`Ambiente do Servidor: `,process.platform);
