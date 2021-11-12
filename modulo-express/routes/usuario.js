const express = require('express');
const router = express.Router();

function logReq(req, res, next) {
    console.log('Executando a função Middleware para a rota usuários.')
    return next()
}

// Acessando Via GET
router.get('/', logReq, (req, res) => {
    res.send('Listando Usuários')
})

// Acessando Via GET
router.get('/:id', (req, res) => {
    res.send('Acessando Usuário com o ID: '+req.params.id)
})

module.exports = router