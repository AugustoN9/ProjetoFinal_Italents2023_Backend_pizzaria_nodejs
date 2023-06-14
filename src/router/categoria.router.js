const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");
const paginacao = require("../middleware/paginacao.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validaCategoria, validaId } = require("../middleware/validacao.middleware");

router.get("/findAll", authMiddleware, paginacao, categoriaController.findAllCategoryController);
router.get("/findById/:id", authMiddleware, validaId, categoriaController.findByIdCategoryController);

router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoryController);

router.put("/update/:id", authMiddleware, validaId, validaCategoria, categoriaController.updateCategoryController);

router.delete("/delete/:id", authMiddleware, validaId, categoriaController.removeCategoryController);

module.exports = router;