import React from 'react';
import styled from 'styled-components';
import githubLogo from './assets/github-mark-white.png';
import linkedinLogo from './assets/linkedin-logo.svg';

const Wrapper = styled.div`
	width: 100%;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	width: 80%;
	margin: 0 auto;
`;

const Text = styled.div`
	color: #fff;
	font-weight: bold;
	display: flex;
	align-items: center;
`;

const Img = styled.img`
	height: 30px;
	width: auto;
	cursor: pointer;
`;

const Footer = () => {
	return (
		<Wrapper>
			<Content>
				<Text>Visit my links!</Text>
				<a href='https://www.linkedin.com/in/lindavid1998/'>
					<Img src={linkedinLogo} />
				</a>
				<a href='https://github.com/lindavid1998'>
					<Img src={githubLogo} />
				</a>
			</Content>
		</Wrapper>
	);
};

export default Footer;
