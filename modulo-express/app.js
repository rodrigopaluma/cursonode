const express = require('express'); // Importa o express
const app = express(); // Executa o express
const adminRoutes = require('./routes/admin') // Importa a Rota de Admin
const usuarioRoutes = require('./routes/usuario') // Importa a Rota de Usuario

app.use(express.json()) // Permite a utilização do Json

// Acessando Via GET
app.get('/', (req, res) => {
    res.send('Acessando a Home')
})

app.use('/admin', adminRoutes) // Utiliza a Rota de Admin
app.use('/usuarios', usuarioRoutes) // Utiliza a Rota de Usuário

app.listen(3000) // Serve o Express