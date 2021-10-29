function soma(x) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(x + 5000);
        },3000);
    })
}

soma(950)
.then((resultado)=>{
    console.log('Resolvido, Resultado',resultado);
});
