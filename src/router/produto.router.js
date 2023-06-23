const express = require("express");
const router = express.Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaIdParams, valida_IdBody } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaIdParams, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductController);

router.post("/create", validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, validaIdParams, valida_IdBody, produtoController.addCategoriaProdutoController);
router.post("/addSabore/:id", authMiddleware, validaIdParams, valida_IdBody, produtoController.addSaboreProdutoController);


router.put("/update/:id", authMiddleware, validaIdParams, validaProduto, produtoController.updateProductController);

router.delete("/delete/:id", authMiddleware, validaIdParams, produtoController.removeProductController);
router.delete("/rmCategoria", authMiddleware, produtoController.rmCategoriaProdutoController);
router.delete("/removeSabore/:id", authMiddleware, validaIdParams, produtoController.rmSaboreProdutoController);

module.exports = router;