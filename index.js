const express = require("express")
const app = express()
const porta = 3000
const path = require("path")

const caminhoBase = path.join(__dirname, "templates")

app.get('/' , (requisicao, resposta) => (
    resposta.sendFile(`${caminhoBase}/index.html`)
))



app.listen(porta, () => (
    console.log(`Rodando na porta ${porta}`)
))