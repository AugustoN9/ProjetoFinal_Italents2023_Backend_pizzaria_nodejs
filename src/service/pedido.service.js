const Pedido = require("../model/Pedido");

const findAllPedidosService = (limit, offset) => {
    return Pedido.find().limit(limit).skip(offset);
};

const findByIdPedidoService = (id) => {
    return Pedido.findById(id);
};

const createPedidoService = (body) => {
    return Pedido.create(body);
};

const removePedidoService = (id) => {
    return Pedido.findByIdAndRemove(id);
};

const updateStatusPedidoService = (id) => {
    return Pedido.findOneAndUpdate({ _id: id }, { $set: { concluido: true } });
};

module.exports = {
    findAllPedidosService,
    findByIdPedidoService,
    createPedidoService,
    removePedidoService,
    updateStatusPedidoService
}