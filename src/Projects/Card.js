import React from 'react'
import Stack from './Stack'
import Button from '../Button'
import styled from 'styled-components'

const Container = styled.div`
	padding: 20px;
	flex: 1;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 25px;
  height: 100%;
`;

const Name = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	color: var(--accent-color);
`;

const Description = styled.div`
	font-color: var(--light-color);
	font-size: 1.1rem;
`;

const Buttons = styled.div`
	display: flex;
	gap: 25px;
	margin-top: auto;
`;

const Card = ({ name, description, stack, demo, github }) => {
  return (
		<Container>
			<Info>
				<Name>{name}</Name>
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
}

export default Card