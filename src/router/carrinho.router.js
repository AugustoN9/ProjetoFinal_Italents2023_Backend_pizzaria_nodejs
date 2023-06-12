const express = require("express")
const router = express.Router();

const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/findAll", authMiddleware, carrinhoController.findAllCarrinhoController);
router.get("/find/:id", authMiddleware, carrinhoController.findByIdCarrinhoController);

router.post("/create", authMiddleware, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, carrinhoController.removeCarrinhoController);

module.exports = router;