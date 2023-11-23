const { Todo, todoManagement } = require('./lib/todoManagement')

const tdm = todoManagement()
tdm.addTodo('kkk')
console.log(tdm.getTodos)
