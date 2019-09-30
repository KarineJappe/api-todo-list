module.exports = (app) => {
    const tarefa = require('./control.js');

    app.post('/tarefa', tarefa.create);
    app.get('/tarefa', tarefa.findAll);
    app.get('/tarefa/:tarefaId', tarefa.findOne);
    app.put('/tarefa/:tarefaId', tarefa.update);
    app.delete('/tarefa/:tarefaId', tarefa.delete);
}