import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 20px;
`
export const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 20px;
`

export const Item = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ active }) => (!active ? '#516dca' : '#ccc')};
  border-radius: 5px;
  padding: 10px;
  height: 100%;
`

export const ItemText = styled.Text`
  color: #fff;
  text-decoration: ${({ active }) => (!active ? 'line-through' : 'none')};
`

export const RemoveTodo = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 5px;
  margin-left: 10px;
`
