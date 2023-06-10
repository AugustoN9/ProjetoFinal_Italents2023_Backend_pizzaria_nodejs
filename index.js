const express = require("express");

require("dotenv").config();

const connectToDatabase = require("./src/database/database");
const usuario = require("./src/router/usuario.router");
const auth = require("./src/router/auth.router");
const app = express();
const port = 3009;

app.use(express.json());

connectToDatabase();   //conectando ao Banco de Dados

app.use("/usuario", usuario);    //chamando as rotas do Usuario
app.use("/auth", auth);    //chamando a rota de Autenticação

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso Marketplace."
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});