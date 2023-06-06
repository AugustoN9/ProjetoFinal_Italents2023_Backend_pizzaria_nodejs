const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const findAllUsersService = () => {
    return Usuario.find();
};

const createUsersService = (body) => {
    return Usuario.create(body);
};

const updateUsersService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeUsersService = (id) => {
    return Usuario.findByIdAndRemove(id);
};

const addUserAddressService = (id, endereco) => {

};

const removeUserAddressService = (id) => {

};

const addUserFavProductService = (id, produto) => {

};

const removeUserFavProductService = (produto) => {

};

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUsersService,
    updateUsersService,
    removeUsersService,
    addUserAddressService,
    removeUserAddressService,
    addUserFavProductService,
    removeUserFavProductService
}