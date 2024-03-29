import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Stack from './Stack';

const Container = styled.div`
	display: flex;
	height: fit-content;
	width: 80%;
	gap: 40px;
	justify-content: center;
`;

const Image = styled.div`
	background-image: url(${(prop) => prop.image});
	width: 60%;
	height: 370px;
	max-width: 470px;
	background-size: cover;
	border-radius: 5px;
	background-position: 70% 70%;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	width: fit-content;
`;

const Description = styled.p`
	// color: var(--light-color);
	// font-size: 1.1rem;
	// line-height: 1.5;
	max-width: 600px;
`;

const Buttons = styled.div`
	display: flex;
	gap: 20px;
	margin-top: auto;
`;

const Project = ({ name, image, description, stack, demo, github }) => {
	return (
		<Container>
			<Image image={image}></Image>
			<Info>
				<h3>{name}</h3>
				<Description>{description}</Description>
				<Stack stack={stack} />
				<Buttons>
					<a href={demo}>
						<Button color='primary' text='Demo' />
					</a>
					<a href={github}>
						<Button color='secondary' text='Code' />
					</a>
				</Buttons>
			</Info>
		</Container>
	);
};

export default Project;
