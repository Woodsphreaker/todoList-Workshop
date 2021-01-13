import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeTodo, statusTodo } from '../../store/modules/todo/actions'

import { Container, ItemContainer, Item, ItemText, RemoveTodo } from './styles'

const TodoItens = () => {
  const dispatch = useDispatch()
  const todos = useSelector(({ todos }) => {
    console.tron.log('useSelector', todos)
    return todos
  })

  const handlePressRemoveTodo = (todo) => {
    dispatch(removeTodo(todo))
  }

  const handlePressChangeStatusTodo = (todo) => {
    dispatch(statusTodo(todo))
  }

  return (
    <Container>
      {todos.map((todo) => {
        console.tron.log('map', todo)
        return (
          <ItemContainer key={todo.name}>
            <Item
              name={todo.name}
              onPress={() => handlePressChangeStatusTodo(todo)}>
              <ItemText active={todo.active}>{todo.name}</ItemText>
            </Item>
            <RemoveTodo onPress={() => handlePressRemoveTodo(todo)} />
          </ItemContainer>
        )
      })}
    </Container>
  )
}

export default memo(TodoItens)
