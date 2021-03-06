const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/db_finance');

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE} não é valido para o atributo '{PATH}'."