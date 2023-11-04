import React from 'react';
import styled from 'styled-components';
import githubLogo from '../../assets/github-mark-white.png';
import linkedinLogo from '../../assets/linkedin-logo.svg';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	width: 80%;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
  flex-direction: column;
	gap: 20px;
	width: 80%;
	margin: 0 auto;
`;

const Text = styled.div`
	color: var(--light-color);
	font-weight: bold;
	display: flex;
	align-items: center;
  font-size: 1.2rem;
`;

const Img = styled.img`
	height: 40px;
	width: auto;
	cursor: pointer;
`;

const Logos = styled.div`
  display: flex;
  gap: 20px;
`

const Contact = () => {
	return (
		<Container id='contact'>
			<h1>Contact</h1>
			<Content>
				<Text>Visit my links below or email me at lindavid1998@gmail.com!</Text>
				<Logos>
          <a href='https://www.linkedin.com/in/lindavid1998/'>
            <Img src={linkedinLogo} />
          </a>
          <a href='https://github.com/lindavid1998'>
            <Img src={githubLogo} />
          </a>
        </Logos>
			</Content>
		</Container>
	);
};

export default Contact;
