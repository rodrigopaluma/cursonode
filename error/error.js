function execute(){
    executeTo();
}

function executeTo(){
    throw new Error('Deu erro na aplicação');
}

function init() {
    try {
        execute();
    } catch (e) {
        console.log(`Temos um problema! ${e.message}`);
    }
}

init();
console.log('Depois do erro');