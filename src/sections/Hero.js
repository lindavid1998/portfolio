import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import meImg from '../assets/me.jpg';
import Typed from 'typed.js';

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 80px;
`;

const Image = styled.img`
	border-radius: 50%;
	height: 350px;
	width: 350px;
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

const Text = styled.div`
	font-size: 2rem;
	max-width: 420px;
	color: var(--light-color);
`;

const Subtext = styled.div`
	font-size: 1.3rem;
`;

const Hero = () => {
  const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [`I'm David, your friendly neighborhood front-end dev`],
			startDelay: 300,
			typeSpeed: 50,
		});
  }, []);
  
	return (
		<Container>
			<Image src={meImg}></Image>
			<TextWrapper>
        <Text><span ref={el}></span></Text>
				<Subtext>Get to know me and my work below!</Subtext>
			</TextWrapper>
		</Container>
	);
};

export default Hero;
