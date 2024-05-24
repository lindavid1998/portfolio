import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	gap: 28px;
	align-items: stretch;
	@media (max-width: 850px) {
		flex-direction: column;
		gap: 50px;
	}
`;

const cardData = [
	{
		name: 'Battleship',
		description:
			'An interactive battleship game where users can play with a computer. Project was used to learn Jest for unit testing.',
		stack: ['jest', 'html', 'js', 'css'],
		demo: 'https://lindavid1998.github.io/battleship/',
		github: 'https://github.com/lindavid1998/battleship',
	},
	{
		name: 'Weather App',
		description:
			'Demonstration of using the OpenWeatherAPI and asynchronous callbacks.',
		stack: ['html', 'js', 'css'],
		demo: 'https://lindavid1998.github.io/weather-api-demo',
		github: 'https://github.com/lindavid1998/weather-api-demo',
	},
	{
		name: 'To Do List',
		description:
			'A to do list based off Todoist. Used the local storage web API to store user data and mimic a backend.',
		stack: ['html', 'js', 'css'],
		demo: 'https://lindavid1998.github.io/to-do-list',
		github: 'https://github.com/lindavid1998/to-do-list',
	},
];

const Cards = () => {
	return (
		<Container>
			{cardData.map((project, index) => (
				<Card
					key={index}
					name={project.name}
					description={project.description}
					stack={project.stack}
					demo={project.demo}
					github={project.github}
				/>
			))}
		</Container>
	);
};

export default Cards;
