const mongoose = require("mongoose");
const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    endereços: [
        {
            logradouro: { type: String, required: true },
            numero: { type: Number, required: true },
            complemento: { type: String, required: false },
            CEP: { type: String, required: true },
            createAt: { type: dATE, required: true },
        }
    ],
    createAt: { type: dATE, required: true },
    produtos_fav: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "produtos" },
            createAt: { type: dATE, required: true }
        }
    ],
    admin: { type: Boolean, required: true, default: false }

});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;