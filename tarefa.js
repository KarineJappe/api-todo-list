const mongoose = require('mongoose');

const tarefaSchema = mongoose.Schema({
    nome:String,
    descricao:String,
    status:String
}, {
    timestamps:true, 
});

module.exports = mongoose.model('tarefa', tarefaSchema);