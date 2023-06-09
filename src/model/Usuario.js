const mongoose = require("mongoose");
const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    enderecos: [
        {
            logradouro: { type: String, required: true },
            nome: { type: String, required: true },
            numero: { type: Number, required: true },
            complemento: { type: String, required: false },
            CEP: { type: String, required: true },
            createAt: { type: Date, required: true, default: Date.now() },
        }
    ],
    createAt: { type: Date, required: true, default: Date.now() }

});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;