const express = require("express")
const { constants } = require("os")
const app = express()
const porta = 3000
const path = require("path")

const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))


app.post("/cadastrar/salvar" , (requisicao, resposta) => {
    const nome = requisicao.body.nome
    const email = requisicao.body.email
    const senha = requisicao.body.senha

    console.log(`O email do usuário é ${email}`)
})

app.get("/cadastrar" , (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Acessando dados do usuário ${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/' , (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})



app.listen(porta, () => {
    console.log(`Rodando na porta ${porta}`)
})