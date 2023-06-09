const Usuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");

const loginService = (email) => Usuario.findOne({ email: email }).select("senha");

const generateToken = (userId) => jwt.sign({ id: userId }, "SC6pJkHUh69La1zNli6482982734e45", { expiresIn: 86400 });

module.exports = {
    loginService,
    generateToken
};