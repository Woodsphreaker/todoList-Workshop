const INITIAL_STATE = {
  todos: [],
}

const todo = (state = INITIAL_STATE, action) => {
  const { type } = action

  const actions = {
    '@todo/Add': () => {
      const { payload } = action
      return {
        ...state,
        todos: [...state.todos, { name: payload, active: true }],
      }
    },
    '@todo/remove': () => {
      const { payload } = action
      const filterTodos = state.todos.filter(
        ({ name }) => name !== payload.name
      )

      return { ...state, todos: filterTodos }
    },
    '@todo/status': () => {
      const { payload } = action
      const todos = state.todos.map(({ name, active }) => {
        return {
          name,
          active: name === payload.name ? !active : active,
        }
      })
      console.tron.log('status', todos)

      return { ...state, todos }
    },
    default: () => state,
  }

  return (actions[type] || actions.default)()
}

export default todo
