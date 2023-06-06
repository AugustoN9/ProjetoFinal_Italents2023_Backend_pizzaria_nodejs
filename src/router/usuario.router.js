const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

router.get('/findById:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

router.post('/create', usuarioController.createUsersController);
router.post('/addAdress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProductController);

router.put('/update/:id', usuarioController.updateUsersController);

router.post('/remove/:id', usuarioController.removeUsersController);
router.post('/removeAddress', usuarioController.removeUserAddressController);
router.post('/removeFavProduct', usuarioController.removeUserFavProductController);

module.exports = router;