const mongoose = require("mongoose");

const manifestacaoSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    endereco: String,
    descricao: String,
    foto: String,
});

const Manifestacao = mongoose.model("Manifestacao", manifestacaoSchema);

module.exports = {
Manifestacao
}