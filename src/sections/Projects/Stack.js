import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

const badges = {
	html: 'HTML5-20232A?style=for-the-badge&logo=html5&logoColor=FFFFFF',
	css: 'CSS3-20232A?style=for-the-badge&logo=css3&logoColor=FFFFFF',
	react: 'React-20232A?style=for-the-badge&logo=react&logoColor=FFFFFF',
	js: 'JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=FFFFFF',
	jest: 'Jest-20232A?style=for-the-badge&logo=Jest&logoColor=FFFFFF',
	redux: 'Redux-20232A?style=for-the-badge&logo=redux&logoColor=FFFFFF',
	firebase:
		'Firebase-20232A?style=for-the-badge&logo=firebase&logoColor=FFFFFF',
	router:
		'React%20Router-20232A.svg?style=for-the-badge&logo=React-Router&logoColor=white',
	postgres:
		'PostgreSQL-20232A.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white',
	express:
		'Express-20232A.svg?style=for-the-badge&logo=Express&logoColor=white',
	tailwind:
		'Tailwind%20CSS-20232A.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white',
	python: 'Python-20232A.svg?style=for-the-badge&logo=Python&logoColor=white',
	pandas: 'pandas-20232A.svg?style=for-the-badge&logo=pandas&logoColor=white',
	numpy: 'NumPy-20232A.svg?style=for-the-badge&logo=NumPy&logoColor=white',
	supabase: 'Supabase-20232A?style=for-the-badge&logo=supabase&logoColor=white',
	node: 'Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=white',
	jwt: 'json%20web%20tokens-20232A?style=for-the-badge&logo=json-web-tokens&logoColor=white',
	styledcomponents:
		'styledcomponents-20232A.svg?style=for-the-badge&logo=styled-components&logoColor=white',
};

const Stack = ({ stack }) => {
	const parentURL = 'https://img.shields.io/badge/';

	return (
		<Container>
			{stack.map((item, index) =>
				badges[item] ? (
					<img
						key={index}
						src={parentURL + badges[item]}
						alt={`Badge for ${item}`}
					/>
				) : (
					<p key={index}>{item}</p>
				)
			)}
		</Container>
	);
};

export default Stack;
