const express = require("express");
const router = express.Router();

const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido, validaIdParams, validaProdutoCarrinhoPedido } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaIdParams, pedidoController.findByIdPedidoController);
router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllPedidosController);

router.post("/create", authMiddleware, validaProdutoCarrinhoPedido, validaPedido, pedidoController.createPedidoController);

router.delete("/delete/:id", authMiddleware, validaIdParams, pedidoController.removePedidoController);

router.patch("/updateStatus/:id", authMiddleware, validaIdParams, pedidoController.updateStatusPedidoController);

module.exports = router;