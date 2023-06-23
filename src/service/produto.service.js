const Produto = require("../model/Produto");

const findAllProductService = (limit, offset) => {
    return Produto.find().limit(limit).skip(offset);
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
            _id: id,
        },
        {
            $push: {
                categorias: {
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

const rmCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                categorias: {
                    _id: categoria._id,
                }
            }
        },
        {
            rawResult: true,
        }
    );
}

const addSaboreProdutoService = (id, sabor) => {
    return Produto.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                sabores: {
                    _id: sabor._id,
                    createdAt: sabor.createdAt
                }
            }
        },
        {
            rawResult: true,
        }

    )
}

const rmSaboreProdutoService = (id, sabor) => {
    return Produto.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                sabores: {
                    _id: sabor._id,
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
    rmCategoriaProdutoService,
    addSaboreProdutoService,
    rmSaboreProdutoService
}