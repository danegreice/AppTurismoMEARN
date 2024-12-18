const mongoose = require("mongoose");

//require("dotenv").config();
//const MONGO_URI = process.env.MONGO_URI;

var Schema = mongoose.Schema;

const cliente = new Schema ({
    cpf        : { type:Number, required: true},
    nome       : { type:String, required: true},
    cep        : { type:Number },
    telefone   : { type:Number, required: true},
    email      : { type:String, required: true}
})

const ClienteModel = mongoose.model("clientes", cliente);

module.exports = { ClienteModel };
