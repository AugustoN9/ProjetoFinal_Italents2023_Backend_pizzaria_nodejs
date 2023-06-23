const produtoService = require("../service/produto.service");

const findAllProductController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.findAllProductService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message} problema findAllController!`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findProductByIdController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.findProductByIdService(req.params.id));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const createProductController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({
                message: `O campo 'nome' precisa ser preenchido! `
            });
        }
        return res.status(201).send(await produtoService.createProductService(body));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const updateProductController = async (req, res) => {
    try {
        const body = req.body;
        if (!body.nome) {
            return res.status(400).send({
                message: `O campo 'nome' precisa ser preenchido! `
            });
        }

        return res.send(await produtoService.updateProductService(req.params.id, body));

    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
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
    catch (err) {
        console.log(`erro: ${err.message} Problema removeProductController`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const addCategoriaProdutoController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.addCategoriaProdutoService(req.params.id, req.body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
}

const rmCategoriaProdutoController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.rmCategoriaProdutoService(req.params.id, req.body));
    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
}

const addSaboreProdutoController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.addSaboreProdutoService(req.params.id, req.body));
    }
    catch (err) {
        console.log(` erro: ${err.message}`);
        return res.status(500).send({ message: ` Erro inesperado, tente novamente!` });
    }
}

const rmSaboreProdutoController = async (req, res) => {
    try {
        res.status(200).send(await produtoService.rmSaboreProdutoService(req.params.id, req.body));
    }
    catch (err) {
        console.log(` erro: ${err.message}`);
        return res.status(500).send({ message: ` Erro inesperado rmSaboreProdutoController, tente novamente!` });
    }
}

module.exports = {
    findAllProductController,
    findProductByIdController,
    createProductController,
    updateProductController,
    removeProductController,
    addCategoriaProdutoController,
    rmCategoriaProdutoController,
    addSaboreProdutoController,
    rmSaboreProdutoController
}
