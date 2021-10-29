function soma(x, callback) {
    return setTimeout(()=>{
        return callback(null, x + 5000);
    },3000);
}

//Callback Function
function resolveSoma(err, results){
    if (err) throw err;
    console.log(results);
}

soma(856, resolveSoma);
