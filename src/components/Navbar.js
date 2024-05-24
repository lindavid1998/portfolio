import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DownloadIcon } from '../assets/download-solid.svg';
import ResumePdf from '../assets/Resume_David_Lin.pdf';

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	width: 90%;
	padding: 10px 0;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	@media (max-width: 850px) {
		flex-direction: column;
		gap: 15px;
	}
`;

const Name = styled.h2`
	margin: 0;
	cursor: pointer;
	padding: 0;
	min-width: fit-content;
`;

const Menu = styled.div`
	display: flex;
	gap: 35px;
	@media (max-width: 850px) {
		display: none;
	}
`;

const MiniMenu = styled.div`
	display: none;
	gap: 35px;
	@media (max-width: 850px) {
		display: flex;
	}
`;

const Item = styled.a`
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 1.2rem;
	cursor: pointer;
	transition: transform 0.3s ease-in-out;
	min-width: fit-content;
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
					<Item href='#hobbies'>Hobbies</Item>
					<Item href='#contact'>Contact</Item>
				</Menu>
				<MiniMenu>
					<Item href={ResumePdf} download='David_Lin_Resume.pdf'>
						<div>Resume</div>
						<Icon fill='white'></Icon>
					</Item>
				</MiniMenu>
			</Wrapper>
		</Nav>
	);
};

export default Navbar;
