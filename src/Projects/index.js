import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import AllFieldsImg from './AllFields.png';
import WaldoImg from './Waldo.png';
import SnowboardImg from './Snowboard.png';
import Cards from './Cards';

const Container = styled.div`
	display: flex;
	width: 80%;
	flex-direction: column;
	align-items: center;
	gap: 70px;
`;

const H1 = styled.h1`
  margin: 0;
`

const Projects = () => {
	return (
		<Container id='projects'>
			<H1>Projects</H1>
			<Project
				name='AllFields'
				image={AllFieldsImg}
				description={
					'An AllTrails clone for soccer players. Users can create accounts,' +
					' look up soccer fields in San Diego, and post reviews of the field' +
					' conditions. I did this project because I wanted to make a CRUD' +
					' application on my own instead of following a tutorial,' +
					` and it's been a blast!`
				}
				stack={['html', 'css', 'js', 'react', 'firebase']}
				demo='https://allfields-570a5.web.app/'
				github='https://github.com/lindavid1998/allfields'
			/>
			<Project
				name={`Where's Waldo`}
				image={WaldoImg}
				description={
					`A photo tagging app based on the game Where's Waldo.` +
					` The hardest part about this project was implementing` +
					` the logic for checking users answers.`
				}
				stack={['html', 'css', 'js', 'jest', 'react', 'firebase']}
				demo='https://lindavid1998.github.io/wheres-waldo/'
				github='https://github.com/lindavid1998/wheres-waldo'
			/>
			<Project
				name={`Snowboard Shop`}
				image={SnowboardImg}
				description={`A mock snowboard shop where you can look up items, add them to your cart, and check them out!`}
				stack={['html', 'css', 'js', 'jest', 'react', 'redux']}
				demo='https://lindavid1998.github.io/snowboard-shop/'
				github='https://github.com/lindavid1998/snowboard-shop'
			/>
			<Cards />
		</Container>
	);
};

export default Projects;
