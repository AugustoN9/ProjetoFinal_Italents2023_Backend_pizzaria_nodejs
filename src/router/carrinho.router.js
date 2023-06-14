const express = require("express")
const router = express.Router();

const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCarrinho } = require("../middleware/validacao.middleware");

router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhoController);
router.get("/find/:id", authMiddleware, carrinhoController.findByIdCarrinhoController);

router.post("/create", authMiddleware, validaCarrinho, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, validaCarrinho, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, carrinhoController.removeCarrinhoController);

module.exports = router;