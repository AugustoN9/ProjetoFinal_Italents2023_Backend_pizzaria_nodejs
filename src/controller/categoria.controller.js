const categoriaService = require("../service/categoria.service");

const findAllCategoryController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.findAllCategoryService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findByIdCategoryController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.findByIdCategoryService(req.params.id));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const createCategoryController = async (req, res) => {
    try {
        res.status(201).send(await categoriaService.createCategoryService(req.body));

    }
    catch (err) {
        console.log(`erro: ${err.message} erro createCategoryController! `);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const updateCategoryController = async (req, res) => {
    try {
        console.log("categoria atualizada com sucesso!");
        res.status(200).send(await categoriaService.updateCategoryService(req.params.id, req.body));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const removeCategoryController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.removeCategoryService(req.params.id));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

module.exports = {
    findAllCategoryController,
    findByIdCategoryController,
    createCategoryController,
    updateCategoryController,
    removeCategoryController
}