const express = require("express");
require("dotenv").config();
const cors = require("cors");

const connectToDatabase = require("./src/database/database");  // arquivo de conexao com o  banco

const usuario = require("./src/router/usuario.router"); // arquivo de rota do usuario
const auth = require("./src/router/auth.router");       // arquivo de rota do auth
const produto = require("./src/router/produto.router"); // arquivo de rota do produto
const categoria = require("./src/router/categoria.router"); // arquivo de rota da categoria
const carrinho = require("./src/router/carrinho.router"); // arquivo de rota do carrinho
const pedido = require("./src/router/pedido.router"); // arquivo de rota do pedido
const docs = require("./src/router/docs.router"); // arquivo de rota de documentacao

const app = express();
const port = 3009;

app.use(express.json());
app.use(cors(
    {
        origin: "localhost:3009",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
));

connectToDatabase();   // conectando ao Banco de Dados

app.use("/usuario", usuario);    // chamando as rotas do Usuario
app.use("/auth", auth);          // chamando as rotas de Autenticação
app.use("/produto", produto);    // chamando as rotas de Produto
app.use("/categoria", categoria);    // chamando as rotas de categoria
app.use("/carrinho", carrinho);    // chamando as rotas do carrinho
app.use("/pedido", pedido);    // chamando as rotas do carrinho
app.use("/docs", docs);    // chamando as rotas de docs

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso Marketplace."
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});