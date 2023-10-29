import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  font-weight: bold;
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
`;

const Name = styled.h1`
  margin: 0;
  cursor: pointer;
`

const Menu = styled.div`
  display: flex;
  gap: 25px;
`

const Item = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
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
					<Item>Projects</Item>
					<Item>About Me</Item>
					<Item>Contact</Item>
				</Menu>
			</Wrapper>
		</Nav>
	);
}

export default Navbar