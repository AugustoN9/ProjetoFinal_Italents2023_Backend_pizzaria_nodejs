const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    createAt: { type: Date, required: true, default: Date.now() },
    produtos_fav: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, unique: true, ref: "produtos" },
            createAt: {
                type: Date, default: Date.now(),
            }
        }
    ],
    admin: { type: Boolean, required: true, default: false },

});



UsuarioSchema.pre("save", async function (next) {
    if (this.senha) {
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

UsuarioSchema.pre("findOneAndUpdate", async function (next) {
    if (this._update.senha) {
        this._update.senha = await bcrypt.hash(this._update.senha, 10);
    }
    next();
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;