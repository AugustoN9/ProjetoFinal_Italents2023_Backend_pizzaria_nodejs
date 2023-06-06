const express = require("express");
const connectToDatabase = require("./src/database/database");
const usuario = require("./src/router/usuario.router");
const app = express();
const port = 3009;

app.use(express.json());

connectToDatabase();   //conectando ao Banco de Dados

app.use("/usuario", usuario);    //chamando as rotas do Usuario

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso Marketplace."
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});