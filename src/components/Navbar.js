import React from 'react';
import styled from 'styled-components';
import githubLogo from '../assets/github-mark-white.png';
import linkedinLogo from '../assets/linkedin-logo.svg';

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	width: 100vw;
	padding: 10px 0;
	position: sticky; 
	top: 0; 
	background-color: var(--background-color);
	z-index: 999;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	max-width: 1000px;
`;

const Name = styled.h2`
	margin: 0;
	cursor: pointer;
	padding: 0;
	min-width: fit-content;
`;

const Menu = styled.div`
	display: flex;
	gap: 32px;
	@media (max-width: 900px) {
		display: none;
	}
`;

const MiniMenu = styled.div`
	display: none;
	gap: 35px;
	@media (max-width: 900px) {
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

const Img = styled.img`
	height: 100%;
	width: 100%;
	cursor: pointer;
`;

const Links = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
`;

const A = styled.a`
	cursor: pointer;
	height: 30px;
	width: 30px;
	transition: transform 0.3s ease-in-out;
	&:hover {
		transform: translate(0, -5px);
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<Wrapper>
				<Name>David Lin</Name>
				<Menu>
					<Item href='#work-experience'>Work Experience</Item>
					<Item href='#projects'>Projects</Item>
					<Item href='#about'>About Me</Item>
					<Item href='#hobbies'>Hobbies</Item>
					<Item href='#contact'>Contact</Item>
					<Links>
						<A href='https://www.linkedin.com/in/lindavid1998/'>
							<Img src={linkedinLogo} />
						</A>
						<A href='https://github.com/lindavid1998'>
							<Img src={githubLogo} />
						</A>
					</Links>
				</Menu>

				<MiniMenu>
					<Links>
						<A href='https://www.linkedin.com/in/lindavid1998/'>
							<Img src={linkedinLogo} />
						</A>
						<A href='https://github.com/lindavid1998'>
							<Img src={githubLogo} />
						</A>
					</Links>
				</MiniMenu>
			</Wrapper>
		</Nav>
	);
};

export default Navbar;
