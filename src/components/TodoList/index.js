import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../../store/modules/todo/actions'
import TodoItens from '../TodoItens'

import {
  Container,
  FormContainer,
  Input,
  AddButton,
  ButtonLabel,
} from './styles'

const Todo = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    dispatch(addTodo(todo))
    setTodo('')
  }

  const handleInputChange = (text) => {
    setTodo(text)
  }

  return (
    <Container>
      <FormContainer>
        <Input
          value={todo}
          onChangeText={handleInputChange}
          autoCapitalize="none"
        />
        <AddButton onPress={handleAddTodo}>
          <ButtonLabel>ADD</ButtonLabel>
        </AddButton>
      </FormContainer>

      <TodoItens />
    </Container>
  )
}

export default Todo
