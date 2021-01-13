import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

const AppContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export default AppContainer

AppContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
}
