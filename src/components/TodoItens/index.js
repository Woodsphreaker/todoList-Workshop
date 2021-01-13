import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeTodo, statusTodo } from '../../store/modules/todo/actions'

import { Container, ItemContainer, Item, ItemText, RemoveTodo } from './styles'

const TodoItens = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handlePressRemoveTodo = (todo) => {
    dispatch(removeTodo(todo))
  }

  const handlePressChangeStatusTodo = (todo) => {
    dispatch(statusTodo(todo))
  }

  return (
    <Container>
      {todos.map((todo) => (
        <ItemContainer key={todo.name}>
          <Item
            active={todo.active}
            onPress={() => handlePressChangeStatusTodo(todo)}>
            <ItemText>{todo.name}</ItemText>
          </Item>
          <RemoveTodo onPress={() => handlePressRemoveTodo(todo)} />
        </ItemContainer>
      ))}
    </Container>
  )
}

export default TodoItens
