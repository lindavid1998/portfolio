import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import styled from 'styled-components';
import Projects from './sections/Projects';
import About from './sections/About';
import Hobbies from './sections/Hobbies';
import Contact from './sections/Contact';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	padding: 30px;
`;

const App = () => {
	return (
		<Container>
			<Navbar />
			<Hero />
			<Projects />
			<About />
			<Hobbies />
			<Contact />
		</Container>
	);
};

export default App;
