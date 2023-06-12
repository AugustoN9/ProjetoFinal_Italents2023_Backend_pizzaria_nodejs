const Carrinho = require("../model/Carrinho");

const findAllCarrinhoService = () => {
    return Carrinho.find();
};

const findByIdCarrinhoService = (id) => {
    return Carrinho.findById(id);
};

const createCarrinhoService = (body) => {
    return Carrinho.create(body);
};

const updateCarrinhoService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeCarrinhoService = (id) => {
    return Carrinho.findByIdAndRemove(id);
};

module.exports = {
    findAllCarrinhoService,
    findByIdCarrinhoService,
    createCarrinhoService,
    updateCarrinhoService,
    removeCarrinhoService
}