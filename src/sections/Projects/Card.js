import React from 'react';
import Stack from './Stack';
import Button from '../../components/Button';
import styled from 'styled-components';

const Container = styled.div`
	padding: 20px;
	flex: 1;
	background-color: var(--dark-gray-background);
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	height: 100%;
`;

const Description = styled.p`
	overflow: hidden;
`;

const Buttons = styled.div`
	display: flex;
	gap: 20px;
	margin-top: auto;
	min-height: 80px;
	align-items: flex-end;
`;

const Card = ({ name, description, stack, demo, github }) => {
	return (
		<Container>
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

export default Card;
