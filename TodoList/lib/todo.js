class Todo {
  static runningId = 1
  constructor(description) {
    this.id = Todo.runningId++
    this.description = description
  }
  getTodo() {
    return this
  }
  setDescription(newDescription) {
    description = newDescription
  }
}

module.exports = { Todo }
