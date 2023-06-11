const Produto = require("../model/Produto");

const findAllProductService = () => {
    return Produto.find();
};

const findProductByIdService = (id) => {
    return Produto.findById(id);
};

const createProductService = (body) => {
    return Produto.create(body);
};

const updateProductService = (id, body) => {
    return Produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeProductService = (id) => {
    return Produto.findByIdAndRemove(id);
};

module.exports = {
    findAllProductService,
    findProductByIdService,
    createProductService,
    updateProductService,
    removeProductService,
}