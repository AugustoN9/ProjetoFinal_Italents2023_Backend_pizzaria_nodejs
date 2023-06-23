const mongoose = require("mongoose");

const SaboreSchema = new mongoose.Schema({
    nome: {
        type: String, unique: true, requered: true
    },
    createdAt: { type: Date, required: true, default: Date.now() },
});

const Sabores = mongoose.model("sabores", SaboreSchema);

module.exports = Sabores;