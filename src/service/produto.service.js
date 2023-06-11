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

const addCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categoria: {
                    _id: categoria._id,
                    createdAt: categoria.createdAt
                }
            }
        },
        {
            rawResult: true,
        }

    )
}

const rmCategoriaProdutoService = (categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: categoria.id,
        },
        {
            $pull: {
                categoria: {
                    _id: categoria.idCategoria,
                }
            }
        },
        {
            rawResult: true,
        }
    );
}

module.exports = {
    findAllProductService,
    findProductByIdService,
    createProductService,
    updateProductService,
    removeProductService,
    addCategoriaProdutoService,
    rmCategoriaProdutoService
}