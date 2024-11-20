import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	width: 80%;
`;

const Text = styled.p`
	display: flex;
	align-items: center;
	font-size: 1.2rem;
	text-align: center;
`;

const Contact = () => {
	return (
		<Container id='contact'>
			<h1>Contact</h1>
			<Text>Email: lindavid1998@gmail.com</Text>
		</Container>
	);
};

export default Contact;
