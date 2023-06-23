const Sabore = require("../model/Sabores");

const findAllSaboreService = (limit, offset) => {
    return Sabore.find().limit(limit).skip(offset);
};

const findByIdSaboreService = (id) => {
    return Sabore.findById(id);
};

const createSaboreService = (body) => {
    return Sabore.create(body);
};

const updateSaboreService = (id, body) => {
    return Sabore.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeSaboreService = (id) => {
    return Sabore.findByIdAndRemove(id);
};

module.exports = {
    findAllSaboreService,
    findByIdSaboreService,
    createSaboreService,
    updateSaboreService,
    removeSaboreService
}