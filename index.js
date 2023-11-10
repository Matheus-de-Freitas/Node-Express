const express = require("express")
const { constants } = require("os")
const app = express()
const porta = 3000
const path = require("path")

const caminhoBase = path.join(__dirname, "templates")

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