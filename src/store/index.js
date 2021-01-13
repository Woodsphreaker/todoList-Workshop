import { createStore } from 'redux'

import todoReducer from './modules/todo/reducer'

const store = createStore(todoReducer)

export default store
