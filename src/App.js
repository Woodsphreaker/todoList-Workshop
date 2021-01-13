import React from 'react'
import TodoList from './components/TodoList'
import AppContainer from './components/AppContainer'
import { Provider } from 'react-redux'
import store from './store/index'

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <TodoList />
      </AppContainer>
    </Provider>
  )
}

export default App
