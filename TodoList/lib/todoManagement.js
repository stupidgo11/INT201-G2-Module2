const { Todo } = require('./todo.js')

function todoManagement() {
  const todos = []
  function addTodo(desc) {
    todos.push(new Todo(desc))
    return todos.length
  }
  function findTodo(searchId) {
    todos.find((todo) => todo.id === searchId)
  }
  function findIndexTodo(searchId) {
    todos.findIndex((todo) => todo.id === searchId)
  }
  const removeTodo = (removeId) => {
    todos.splice(findIndexTodo(removeId), 1)
  }
  const getTodos = () => {
    return todos
  }
  return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos }
}

module.exports = { todoManagement }
