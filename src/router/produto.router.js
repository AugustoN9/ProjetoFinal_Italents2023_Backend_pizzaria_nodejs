const express = require("express");
const router = express.Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaId } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaId, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductController);

router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, validaId, produtoController.addCategoriaProdutoController);

router.put("/update/:id", authMiddleware, validaId, validaProduto, produtoController.updateProductController);

router.delete("/delete/:id", authMiddleware, validaId, produtoController.removeProductController);
router.delete("/rmCategoria/:id", authMiddleware, validaId, produtoController.rmCategoriaProdutoController);

module.exports = router;