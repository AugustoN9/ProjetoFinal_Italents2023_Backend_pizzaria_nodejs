const express = require("express")
const router = express.Router();

const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCarrinho, validaIdParams, validaProdutoCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhoController);
router.get("/find/:id", authMiddleware, validaIdParams, carrinhoController.findByIdCarrinhoController);

router.post("/create", authMiddleware, validaProdutoCarrinhoPedido, validaCarrinho, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, validaIdParams, validaCarrinho, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, validaIdParams, carrinhoController.removeCarrinhoController);

module.exports = router;