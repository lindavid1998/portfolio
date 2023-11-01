import React from 'react';
import styled from 'styled-components';
import Timeline from './Timeline';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const About = () => {
	return (
		<Container id='about'>
			<h1>About Me</h1>
			<Timeline></Timeline>
		</Container>
	);
};

export default About;
