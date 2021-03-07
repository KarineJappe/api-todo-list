# api-todo-list
Api desenvolvida em Node JS utilizando o banco de dados MongoDB para a disciplina de POO.
- Link para testes: [API](https://api-tasks-manager.herokuapp.com/)

 - Rotas
  ``` 
      app.post('/tarefa', tarefa.create);
      app.get('/tarefa', tarefa.findAll);
      app.get('/tarefa/:tarefaId', tarefa.findOne);
      app.put('/tarefa/:tarefaId', tarefa.update);
      app.delete('/tarefa/:tarefaId', tarefa.delete);

  ```
