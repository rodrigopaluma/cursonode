const express = require('express'); // Importa o express
const app = express(); // Executa o express
const adminRoutes = require('./routes/admin') // Importa a Rota de Admin
const usuarioRoutes = require('./routes/usuario') // Importa a Rota de Usuario
const cookieParser = require('cookie-parser') // Cookie-Parser

// Servindo uma pasta estática
app.use(express.static('public')) // Pasta public serve arquivos estáticos(HTML, CSS, Imagens, JS)
// app.use('/estatica',express.static('public')) Caso somente em 1 endereço seja servida a pasta estática

app.use(express.json()) // Permite a utilização do Json - Middleware do tipo builtwin
app.use(cookieParser())

// Middleware em tempo de execução
app.use((req, res, next)=>{
    console.log('Executando Middleware em tempo de execução')
    return next()
})

// Setando Cookie
app.get('/setcookie',(req, res)=>{
    res.cookie('user', 'Rodrigo Paluma', {maxAge: 900000, httpOnly: true})
    return res.send('Cookie foi gravado com sucesso!')
})

// Recuperando cookie
app.get('/getcookie',(req, res)=>{
    let user = req.cookies['user']
    if(user){
        return res.send(user)
    }
})

// Acessando Via GET
app.get('/', (req, res) => {
    res.send('Acessando a Home')
})

app.use('/admin', adminRoutes) // Utiliza a Rota de Admin
app.use('/usuarios', usuarioRoutes) // Utiliza a Rota de Usuário

// Geração de erro
app.get('*',(req, res, next) => {
    setImmediate(()=>{
        next( new Error('Temos um problema'))
    })
})

// As funções de tratamento de erro devem sempre ser as últimas do arquivo
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({message: err.message})
})

app.listen(3000) // Serve o Express