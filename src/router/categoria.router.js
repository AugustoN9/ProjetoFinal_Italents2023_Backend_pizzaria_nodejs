const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validaCategoria } = require("../middleware/validacao.middleware");

router.get("/findAll", authMiddleware, categoriaController.findAllCategoryController);
router.get("/findById/:id", authMiddleware, categoriaController.findByIdCategoryController);

router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoryController);

router.put("/update/:id", authMiddleware, validaCategoria, categoriaController.updateCategoryController);

router.delete("/delete/:id", authMiddleware, categoriaController.removeCategoryController);

module.exports = router;