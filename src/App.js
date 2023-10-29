import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero';
import styled from 'styled-components';
import Projects from './Projects';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 30px;
`

const App = () => {
  return (
		<Container>
			<Navbar />
			<Hero />
      <Projects />
      <Footer />
		</Container>
	);
}

export default App