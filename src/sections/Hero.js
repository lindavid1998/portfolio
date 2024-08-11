import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import meImg from '../assets/me.jpg';
import Typed from 'typed.js';

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 50px;
	width: 60%;
	margin: 0 auto;

	@media (max-width: 1400px) {
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
	// bottom: 30px;
	height: 100px;
	gap: 30px;
`;

const Text = styled.h3`
	width: 500px;
	font-size: clamp(1.5rem, 3vw, 1.728rem);
	@media (max-width: 1400px) {
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