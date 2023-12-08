import React from 'react';
import styled from 'styled-components';

const colorStyles = {
	primary: {
		color: 'white',
		backgroundColor: 'var(--accent-color)',
	},
	secondary: {
		color: 'white',
		backgroundColor: 'black',
	},
};

const StyledButton = styled.button`
	padding: 0.7rem 1.85rem;
	font-size: 0.9rem;
	border-radius: 100px;
	cursor: pointer;
	color: ${(props) => colorStyles[props.color].color};
	background-color: ${(props) => colorStyles[props.color].backgroundColor};
	transition: transform 0.3s ease-in-out;
	&:hover {
		transform: translate(0, -5px);
	}
`;

const Button = ({ color, text }) => {
	return <StyledButton color={color}>{text}</StyledButton>;
};

export default Button;
