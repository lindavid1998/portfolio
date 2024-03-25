import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import AllFieldsImg from '../../assets/allfields-demo.gif';
import WaldoImg from '../../assets/waldo-demo.gif';
import SnowboardImg from '../../assets/snowboard-demo.gif';
import Cards from './Cards';

const Container = styled.div`
	display: flex;
	width: 90%;
	flex-direction: column;
	align-items: center;
	gap: 50px;
`;

const Projects = () => {
	return (
		<Container id='projects'>
			<h1>Projects</h1>
			<Project
				name='AllFields'
				image={AllFieldsImg}
				description={
					'A CRUD application built with React and Firebase. It is essentially a clone of AllTrails, but for soccer. Users can create accounts,' +
					' look up soccer fields in San Diego, and post reviews of the field' +
					' conditions.'
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
					` The challenging part about this project was implementing` +
					` the logic for checking users answers.`
				}
				stack={['html', 'css', 'js', 'jest', 'react', 'firebase']}
				demo='https://lindavid1998.github.io/wheres-waldo/'
				github='https://github.com/lindavid1998/wheres-waldo'
			/>
			<Project
				name={`Snowboard Shop`}
				image={SnowboardImg}
				description={`A mock snowboard shop where you can look up items, add them to their cart, and check them out!`}
				stack={['html', 'css', 'js', 'jest', 'react', 'redux']}
				demo='https://lindavid1998.github.io/snowboard-shop/'
				github='https://github.com/lindavid1998/snowboard-shop'
			/>
			<Cards />
		</Container>
	);
};

export default Projects;
