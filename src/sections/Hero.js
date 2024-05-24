import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import meImg from '../assets/me.jpg';
import Typed from 'typed.js';

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 50px;

	@media (max-width: 850px) {
		flex-direction: column;
	}
`;

const Image = styled.img`
	border-radius: 50%;
	height: 320px;
	width: 320px;
	object-fit: cover;
	transform-origin: center;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	bottom: 30px;
	gap: 30px;
`;

const Text = styled.h3`
	width: 420px;
`;

const Hero = () => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [`Hello! I'm David. Get to know me and my work below!`],
			startDelay: 300,
			typeSpeed: 30,
		});
	}, []);

	return (
		<Container>
			<Image src={meImg}></Image>
			<TextWrapper>
				<Text>
					<span ref={el}></span>
				</Text>
			</TextWrapper>
		</Container>
	);
};

export default Hero;
