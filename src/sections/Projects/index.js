import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import AllFieldsImg from '../../assets/allfields-demo.gif';
import WaldoImg from '../../assets/waldo-demo.gif';
import SnowboardImg from '../../assets/snowboard-demo.gif';
import TradingImg from '../../assets/trading.jpg';
import WIP from '../../assets/wip.jpg';
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
				name='Shredders (work in progress)'
				image={WIP}
				description={`A full stack application where users can add friends and plan snowboarding trips
					together`}
				stack={['react', 'postgres', 'express', 'tailwind', 'router']}
			/>
			<Project
				name='Machine Learning Financial Trading Strategy'
				image={TradingImg}
				description={`Capstone project for CS7646 - Machine Learning for Trading.
				A random forest classification learner trading strategy built
				and tested using technical stock indicators from real-world financial data.
				Learner and indicator parameters were tuned based on performance metrics
				such as returns and training time. Achieved a 5% return over a 1-year test
				dataset.`}
				stack={['python', 'numpy', 'pandas']}
			/>
			<Project
				name='AllFields'
				image={AllFieldsImg}
				description={
					'A CRUD application built with React and Firebase. It is essentially a clone of AllTrails, but for soccer. Users can create accounts,' +
					' look up soccer fields in San Diego, and post reviews of the field' +
					' conditions.'
				}
				stack={['react', 'firebase', 'router', 'styledcomponents']}
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
				stack={['react', 'firebase', 'jest']}
				demo='https://lindavid1998.github.io/wheres-waldo/'
				github='https://github.com/lindavid1998/wheres-waldo'
			/>
			<Project
				name={`Snowboard Shop`}
				image={SnowboardImg}
				description={`A mock snowboard shop where you can look up items, add them to their cart, and check them out!`}
				stack={['jest', 'react', 'redux']}
				demo='https://lindavid1998.github.io/snowboard-shop/'
				github='https://github.com/lindavid1998/snowboard-shop'
			/>
			<Cards />
		</Container>
	);
};

export default Projects;
