import React from 'react';
import styled from 'styled-components';
import motorcycleImg from '../../assets/motorcycle.jpg';
import halfDomeImg from '../../assets/half-dome.jpg';
import snowboardImg from '../../assets/snowboard.jpg';
import soccerImg from '../../assets/soccer.jpeg';
import japanImg from '../../assets/japan.JPG'
import formulaOneImg from '../../assets/formulaOne.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
`

const Img = styled.div`
	width: 320px;
	height: 100%;
	background-image: url(${(props) => props.src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Caption = styled.p`
	position: absolute;
	bottom: 0%;
	width: 320px;
	padding: 8px;
	font-size: 1.1rem;
	transition-delay: 2s; 
	transition: opacity 0.2s ease;
	background-color: rgba(0, 0, 0, 0.8);
	opacity: 0;
  overflow: hidden;
`;

const Dock = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	overflow: hidden;
	gap: 5px;
`;

const DockItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1 1 80px;
  max-width: 320px;
	height: 320px;
	overflow: hidden;
	position: relative;
  transition: flex 1s cubic-bezier(0.075, 0.82, 0.165, 1);
	&:hover {
    flex: 1 1 320px;
	}
	&:hover ${Caption} {
    opacity: 1;
	}
`;

const Hobby = ({ img, caption }) => {
	return (
		<DockItem>
			<Img src={img}></Img>
			<Caption>{caption}</Caption>
		</DockItem>
	);
};

const Hobbies = () => {
	return (
		<Container id='hobbies'>
      <h1>Hobbies and Interests</h1>
			<Dock>
				<Hobby
					img={motorcycleImg}
					caption='Starting riding in 2023 and absolutely love my Honda CBR 300.'
				/>
				<Hobby
					img={halfDomeImg}
					caption='I love going on hikes! This was from the top of Half Dome in 2023.'
				/>
				<Hobby
					img={snowboardImg}
					caption='Snowboarding - still need to learn how to ride park!'
				/>
				<Hobby
					img={soccerImg}
					caption={`I will never say no to soccer. You'll pretty much find me playing 4-5 times a week.`}
				/>
				<Hobby
					img={japanImg}
					caption='Love to travel and explore new places! Japan has been my favorite.'
				/>
				<Hobby
					img={formulaOneImg}
					caption='Formula One! This was from the Canadian GP back in 2022.'
				/>
			</Dock>
		</Container>
	);
};

export default Hobbies;
