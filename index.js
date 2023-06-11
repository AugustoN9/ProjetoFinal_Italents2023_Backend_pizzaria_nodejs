const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database");  // arquivo de conexao com o  banco

const usuario = require("./src/router/usuario.router"); // arquivo de rota do usuario
const auth = require("./src/router/auth.router");       // arquivo de rota do auth
const produto = require("./src/router/produto.router"); // arquivo de rota do produto


const app = express();
const port = 3009;

app.use(express.json());

connectToDatabase();   // conectando ao Banco de Dados

app.use("/usuario", usuario);    // chamando as rotas do Usuario
app.use("/auth", auth);          // chamando as rotas de Autenticação
app.use("/produto", produto);    // chamando as rotas de Produto

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso Marketplace."
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});