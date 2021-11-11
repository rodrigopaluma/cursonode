const express = require('express');
const router = express.Router();

// Acessando Via GET
router.get('/', (req, res) => {
    res.send('Listando Usuários')
})

// Acessando Via GET
router.get('/:id', (req, res) => {
    res.send('Acessando Usuário com o ID: '+req.params.id)
})

module.exports = router