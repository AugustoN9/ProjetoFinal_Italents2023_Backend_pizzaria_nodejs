const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");
const paginacao = require("../middleware/paginacao.middleware");

const saboreController = require("../controller/sabores.controller");
const { validaSabores, validaIdParams } = require("../middleware/validacao.middleware");

router.get("/findAll", authMiddleware, paginacao, saboreController.findAllSaboreController);
router.get("/findById/:id", authMiddleware, validaIdParams, saboreController.findByIdSaboreController);

router.post("/create", validaSabores, saboreController.createSaboreController);

router.put("/update/:id", authMiddleware, validaIdParams, validaSabores, saboreController.updateSaboreController);

router.delete("/delete/:id", authMiddleware, validaIdParams, saboreController.removeSaboreController);

module.exports = router;