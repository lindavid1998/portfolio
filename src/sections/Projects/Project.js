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
	padding: 20px;

	@media (max-width: 850px) {
		background-color: var(--dark-gray-background);
		width: 100%;
	}
`;

const Image = styled.img`
	width: 60%;
	height: 370px;
	max-width: 470px;
	object-fit: cover;
	border-radius: 5px;
	object-position: 70% 70%;

	@media (max-width: 850px) {
		display: none;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
	width: fit-content;
`;

const Description = styled.p`
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
			<Image src={require(`../../assets/${image}`)}></Image>
			<Info>
				<h3>{name}</h3>
				<Description>{description}</Description>
				<Stack stack={stack} />
				{demo && github && (
					<Buttons>
						<a href={demo}>
							<Button color='primary' text='Demo' />
						</a>
						<a href={github}>
							<Button color='secondary' text='Code' />
						</a>
					</Buttons>
				)}
			</Info>
		</Container>
	);
};

export default Project;
