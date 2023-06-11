const mongoose = require("mongoose");

const CarrinhoSchema = new mongoose.Schema({
    prdutos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, ref: "produtos" },
            quantidade: { type: Number, required: true }
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now },
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId: { type: mongoose.Schema.type.ObjectId, ref: "usuarios" }
});

const Carrinho = mongoose.model("Carinhos", CarrinhoSchema);


module.exports = Carrinho;