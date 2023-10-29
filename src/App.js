import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {
  return <Container>
    <Navbar></Navbar>
  </Container>;
}

export default App