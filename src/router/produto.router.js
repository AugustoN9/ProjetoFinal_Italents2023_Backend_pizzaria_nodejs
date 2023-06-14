const express = require("express");
const router = express.Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto } = require("../middleware/validacao.middleware");

router.get("/find/:id", authMiddleware, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, produtoController.findAllProductController);

router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, produtoController.addCategoriaProdutoController);

router.put("/update/:id", authMiddleware, produtoController.updateProductController);

router.delete("/delete/:id", authMiddleware, produtoController.removeProductController);
router.delete("/rmCategoria/:id", authMiddleware, produtoController.rmCategoriaProdutoController);

module.exports = router;