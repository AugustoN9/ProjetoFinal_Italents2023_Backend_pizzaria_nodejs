const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const carrinhoController = require("../controller/carrinho.controller");

router.get("/findAll/:id", authMiddleware, carrinhoController.findAllCarrinhoController);
router.get("/findById", authMiddleware, carrinhoController.findByIdCarrinhoController);

router.get("/create", authMiddleware, carrinhoController.createCarrinhoController);

router.get("/update/:id", authMiddleware, carrinhoController.updateCarrinhoController);

router.get("/delete/:id", authMiddleware, carrinhoController.removeCarrinhoController);

module.exports = router;