const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");

router.get("/findAll", authMiddleware, categoriaController.findAllCategoryController);
router.get("/findById/:id", authMiddleware, categoriaController.findByIdCategoryController);

router.post("/create", authMiddleware, categoriaController.createCategoryController);

router.put("/update/:id", authMiddleware, categoriaController.updateCategoryController);

router.delete("/delete/:id", authMiddleware, categoriaController.removeCategoryController);

module.exports = router;