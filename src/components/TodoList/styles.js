import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`

export const FormContainer = styled.View`
  flex-direction: row;
  margin-top: 50px;
  border-bottom-width: 1px;
  border-color: orange;
  padding-bottom: 20px;
`

export const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  border: 1px solid #ccc;
  color: #ccc;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
`

export const AddButton = styled.TouchableOpacity`
  width: 80px;
  height: 50px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: orange;
  justify-content: center;
  align-items: center;
`

export const ButtonLabel = styled.Text`
  font-size: 15px;
  color: #fff;
  padding: 10px;
`
