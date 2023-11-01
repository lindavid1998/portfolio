import React from 'react';
import styled from 'styled-components';

const colorStyles = {
	primary: {
		color: 'var(--background-color)',
		backgroundColor: 'var(--accent-color)',
	},
	secondary: {
		color: 'var(--accent-color)',
		backgroundColor: 'var(--background-color)',
	},
};

const StyledButton = styled.button`
	padding: 10px;
	font-size: 1.2rem;
	border-radius: 5px;
	border: 1px solid var(--accent-color);
	font-weight: bold;
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
