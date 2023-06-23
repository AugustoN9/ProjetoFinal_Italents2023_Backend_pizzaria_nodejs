const saboreService = require("../service/sabores.service");

const findAllSaboreController = async (req, res) => {
    try {
        res.status(200).send(await saboreService.findAllSaboreService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findByIdSaboreController = async (req, res) => {
    try {
        res.status(200).send(await saboreService.findByIdSaboreService(req.params.id));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const createSaboreController = async (req, res) => {
    try {
        res.status(201).send(await saboreService.createSaboreService(req.body));

    }
    catch (err) {
        console.log(`erro: ${err.message} erro createSaboreController! `);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const updateSaboreController = async (req, res) => {
    try {
        console.log("categoria atualizada com sucesso!");
        res.status(200).send(await saboreService.updateSaboreService(req.params.id, req.body));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const removeSaboreController = async (req, res) => {
    try {
        res.status(200).send(await saboreService.removeSaboreService(req.params.id));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

module.exports = {
    findAllSaboreController,
    findByIdSaboreController,
    createSaboreController,
    updateSaboreController,
    removeSaboreController
}