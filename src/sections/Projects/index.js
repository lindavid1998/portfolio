import React from 'react';
import styled from 'styled-components';
import Project from './Project';
// import Cards from './Cards';
import mlProjects from './ml_projects.json';
import webProjects from './web_projects.json';

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
			{webProjects.map((project, index) => (
				<Project
					key={index}
					name={project.name}
					image={project.image}
					description={project.description}
					stack={project.stack}
					demo={project.demo}
					github={project.github}
				/>
			))}
			<h1>ML Projects</h1>
			{mlProjects.map((project, index) => (
				<Project
					key={index}
					name={project.name}
					image={project.image}
					description={project.description}
					stack={project.stack}
					demo={project.demo}
					github={project.github}
				/>
			))}
			{/* <Cards /> */}
		</Container>
	);
};

export default Projects;
