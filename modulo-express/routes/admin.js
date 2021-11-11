const express = require('express');
const router = express.Router();

// Acessando Via GET
router.get('/', (req, res) => {
    res.send('Acessando Administração')
})

// Acessando Via POST
router.post('/', (req, res) => {
    const corpo = `Login: ${req.body.login}\nSenha: ${req.body.senha}`
    res.send('Acessando Administração Via POST\n'+corpo)
})

// Acessando Via PATCH
router.patch('/:id', (req, res) => {
    res.send('Acessando Administração Via Patch')
})

// Acessando Via PUT
router.put('/:id', (req, res) => {
    res.send('Acessando Administração Via Put')
})

// Acessando Via DELETE
router.delete('/:id', (req, res) => {
    res.send('Acessando Administração Via Delete')
})

module.exports = router