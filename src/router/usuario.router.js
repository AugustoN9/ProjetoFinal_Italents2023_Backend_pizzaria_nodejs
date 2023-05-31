const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

router.get('/findById:id');
router.get('/findAll');

router.post('/create');
router.post('/addAdress/:id');
router.post('/addFavProduct/:id');

router.put('/update/:id');

router.post('/remove/:id');
router.post('/removeAddress');
router.post('/removeFavProduct');

module.exports = router;