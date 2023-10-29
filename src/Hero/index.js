import React from 'react'
import styled from 'styled-components'
import meImg from './me.jpg'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`

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
`

const Subtext = styled.div`
  font-size: 1.3rem;
  color: var(--gray-color);
`

const Hero = () => {
  return (
		<Container>
      <Image src={meImg}></Image>
      <TextWrapper>
        <Text>I'm David, your friendly neighborhood front-end dev</Text>
        <Subtext>Get to know me below!</Subtext>
      </TextWrapper>
		</Container>
	);
}

export default Hero