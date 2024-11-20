import React from 'react';
import styled from 'styled-components';
import meImg from '../assets/me.jpg';

const Container = styled.div`
	display: flex;
	gap: 50px;
	width: 60%;
	max-width: 950px;
	margin: 0 auto;

	@media (max-width: 1400px) {
		width: 80%;
		align-items: center;
		flex-direction: column;
	}
`;

const Image = styled.div`
	border-radius: 50%;
	height: 320px;
	width: 320px;
	min-width: 320px;
	object-fit: cover;
	transform-origin: center;
	overflow: hidden;
`;

const Text = styled.h4`
	width: fit-content;
	position: relative;
	background-color: var(--accent-color);
	padding: 0.5em 1.2rem;
	left: -1.2rem;
	border-radius: 14px;

	@media (max-width: 1400px) {
		text-align: center;
		left: 0;
	}
`;

const Intro = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Hero = () => {
	return (
		<Container id='hero'>
			<Image>
				<img src={meImg} style={{ width: '100%', height: '100%' }} />
			</Image>
			<Intro>
				<Text>
					Hi! I'm a full stack web developer with React/PostgreSQL/Node.js
					experience.
				</Text>
				<p>
					I come from an operations background with 3+ YoE as a process engineer
					where I sustained and scaled up high volume medical device
					manufacturing lines. Through that experience, I’ve developed a strong
					foundation in operational efficiency, problem-solving under
					high-stakes conditions, and implementing scalable solutions with
					strategic thinking.{' '}
					<strong style={{ color: 'white' }}>
						Now, I apply those same principles to software engineering—building
						efficient, reliable, and scalable applications.
					</strong>
				</p>
			</Intro>
		</Container>
	);
};

export default Hero;
