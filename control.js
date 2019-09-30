const Tarefa = require('./tarefa.js');

// Create
exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "O conteúdo da tarefa não pode estar vazio"
        });
    }
    const tarefa = new Tarefa({
        nome: req.body.nome, 
        descricao: req.body.descricao,
        status: req.body.status,
    });

    tarefa.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Algo deu errado"
        });
    });
};

// List
exports.findAll = (req, res) => {
    Tarefa.find()
    .then(tarefas => {
        res.send(tarefas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erro."
        });
    });
};

// List by ID
exports.findOne = (req, res) => {
    Tarefa.findById(req.params.tarefaId)
    .then(tarefa => {
        if(!tarefa) {
            return res.status(404).send({
                message: "Erro"
            });            
        }
        res.send(tarefa);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Erro"
            });                
        }
        return res.status(500).send({
            message: "Erro ao encontrar" + req.params.tarefaId
        });
    });
};

// Update 
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "O conteúdo da tafera não pode estar vazio"
        });
    }

    Tarefa.findByIdAndUpdate(req.params.tarefaId, {
        nome: req.body.nome, 
        descricao: req.body.descricao,
        status: req.body.status,
    }, {new: true})
    .then(tarefa => {
        if(!tarefa) {
            return res.status(404).send({
                message: "Tarefa não encontrado com o ID " + req.params.productId
            });
        }
        res.send(tarefa);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Tarefa não encontrado com o ID" + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Algo errado ao atualizar a tarefa com o ID " + req.params.productId
        });
    });
};
// Delete 
exports.delete = (req, res) => {
    Tarefa.findByIdAndRemove(req.params.tarefaId)
    .then(product => {
        if(!tarefa) {
            return res.status(404).send({
                message: "erro"
            });
        }
        res.send({message: "Tarefa deletada"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "erro"
            });                
        }
        return res.status(500).send({
            message: "não foi possivel deletar"
        });
    });
};