const crypto = require('crypto');
const start = Date.now();

function loadHashTime() {
    crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
        console.log(`Hash: ${Date.now() - start}`)
    })
}

loadHashTime();
loadHashTime();
loadHashTime();
loadHashTime();
loadHashTime();