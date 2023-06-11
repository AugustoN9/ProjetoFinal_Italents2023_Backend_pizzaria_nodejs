const produtoService = require("../service/produto.service");

const findAllProductController = async (req, res) => {
    try {
        res.send(await produtoService.findAllProductService());
    }
    catch {
        console.log(`erro: $err.message problema findAllController!`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findProductByIdController = async (req, res) => {
    try {
        res.send(await produtoService.findProductByIdService(req.params.id));
    }
    catch {
        console.log(`erro: $err.message`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const createProductController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId,
            createdAt: new Date(),
        }
        res.send(await produtoService.createProductService(corpo));
    }
    catch {
        console.log(`erro: $err.message`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const updateProductController = async (req, res) => {
    try {
        res.send(await produtoService.updateProductService(req.params.id, req.body));
    }
    catch {
        console.log(`erro: $err.message`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const removeProductController = async (req, res) => {
    try {
        res.send(await produtoService.removeProductService(req.params.id));
    }
    catch {
        console.log(`erro: $err.message`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

module.exports = {
    findAllProductController,
    findProductByIdController,
    createProductController,
    updateProductController,
    removeProductController
}
