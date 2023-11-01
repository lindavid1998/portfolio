import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero';
import styled from 'styled-components';
import Projects from './Projects';
import Footer from './Footer';
import About from './About';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 30px;
`

const App = () => {
  return (
		<Container>
			<Navbar />
			<Hero />
      <Projects />
      <About />
      <Footer />
		</Container>
	);
}

export default App