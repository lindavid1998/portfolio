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
	width: 90%;
	max-width: 420px;
	font-size: clamp(1.5rem, 3vw, 1.728rem);
	@media (max-width: 850px) {
		text-align: center;
	}
`;

const Hero = () => {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				`> Hello! I'm David, and I am seeking a Software Engineering role.
				Discover my projects and skills below!`,
			],
			startDelay: 300,
			typeSpeed: 20,
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
