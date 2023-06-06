const userService = require("../service/usuario.service");

const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);


    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const findAllUsersController = async (req, res) => {
    try {



    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const createUsersController = async (req, res) => {
    try {



    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const updateUsersController = async (req, res) => {
    try {



    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeUsersController = async (req, res) => {
    try {



    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const addUserAddressController = async (req, res) => {
    try {



    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeUserAddressController = async (req, res) => {
    try {



    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const addUserFavProductController = async (req, res) => {
    try {



    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};

const removeUserFavProductController = async (req, res) => {
    try {



    }
    catch (err) {
        res.status(500).send({ Message: `Erro inesperado tente novamente! ` });
        console.log(`erro: ${err.message}`);
    }
};


module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUsersController,
    updateUsersController,
    removeUsersController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController
}