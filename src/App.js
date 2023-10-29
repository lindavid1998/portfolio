import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const App = () => {
  return <Container>
    <Navbar />
    <Hero />
  </Container>;
}

export default App