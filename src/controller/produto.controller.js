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
        const deleteProduct = await produtoService.removeProductService(req.params.id);

        if (deleteProduct == null) {
            res.status(404).send({ Message: `Produto náo encontrado, tente novamente! ` });
        }
        else {
            res.status(200).send({ Message: `Sucesso, Produto deletado! ` });
        }
    }
    catch {
        console.log(`erro: $err.message Problema removeProductController`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const addCategoriaProdutoController = async (req, res) => {
    try {
        req.body.createAt = new Date();
        const categoria = await produtoService.addCategoriaProdutoService(req.params.id, req.body);
    }
    catch {
        console.log(` erro: ${err.message}`);
        return res.status(500).send({ message: ` Erro inesperado, tente novamente!` })
    }
}

const rmCategoriaProdutoController = async (req, res) => {
    try {
        const categoria = await produtoService.removeCategoriaProdutoService(req.body);
    }
    catch {
        console.log(` erro: ${err.message}`);
        return res.status(500).send({ message: ` Erro inesperado, tente novamente!` })
    }
}

module.exports = {
    findAllProductController,
    findProductByIdController,
    createProductController,
    updateProductController,
    removeProductController,
    rmCategoriaProdutoController,
    addCategoriaProdutoController
}
