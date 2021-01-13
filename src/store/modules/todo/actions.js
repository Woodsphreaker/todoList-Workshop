const addTodo = (todo) => {
  return {
    type: '@todo/Add',
    payload: todo,
  }
}

const removeTodo = (todo) => {
  return {
    type: '@todo/remove',
    payload: todo,
  }
}

const statusTodo = (todo) => {
  return {
    type: '@todo/status',
    payload: todo,
  }
}

export { addTodo, removeTodo, statusTodo }
