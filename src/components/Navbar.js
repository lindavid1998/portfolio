import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DownloadIcon } from '../assets/download-solid.svg';
import ResumePdf from '../assets/Resume_Nov2023.pdf'

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 10px 0;
	font-weight: bold;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
`;

const Name = styled.h1`
	margin: 0;
	cursor: pointer;
`;

const Menu = styled.div`
	display: flex;
	gap: 45px;
`;

const Item = styled.a`
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 1.2rem;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;
	&:hover {
		transform: translate(0, -5px);
	}
`;

const Icon = styled(DownloadIcon)`
	height: 1.2rem;
`;

const Navbar = () => {
	return (
		<Nav>
			<Wrapper>
				<Name>David Lin</Name>
				<Menu>
					<Item href='#projects'>Projects</Item>
					<Item href='#about'>About Me</Item>
					<Item href={ResumePdf} download='David_Lin_Resume.pdf'>
						<div>Resume</div>
						<Icon fill='white'></Icon>
					</Item>
					<Item>Contact</Item>
				</Menu>
			</Wrapper>
		</Nav>
	);
};

export default Navbar;
