const Categoria = require("../model/Categoria");

const findAllCategoryService = (limit, offset) => {
    return Categoria.find().limit(limit).skip(offset);
};

const findByIdCategoryService = (id) => {
    return Categoria.findById(id);
};

const createCategoryService = (body) => {
    return Categoria.create(body);
};

const updateCategoryService = (id, body) => {
    return Categoria.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeCategoryService = (id) => {
    return Categoria.findByIdAndRemove(id);
};

module.exports = {
    findAllCategoryService,
    findByIdCategoryService,
    createCategoryService,
    updateCategoryService,
    removeCategoryService
}