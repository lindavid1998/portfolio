import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

// const badges = {
// 	html: 'HTML5-20232A?style=for-the-badge&logo=html5&logoColor=FFFFFF',
// 	css: 'CSS3-20232A?style=for-the-badge&logo=css3&logoColor=FFFFFF',
// 	react: 'React-20232A?style=for-the-badge&logo=react&logoColor=FFFFFF',
// 	js: 'JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=FFFFFF',
// 	jest: 'Jest-20232A?style=for-the-badge&logo=Jest&logoColor=FFFFFF',
// 	redux: 'Redux-20232A?style=for-the-badge&logo=redux&logoColor=FFFFFF',
// 	firebase:
// 		'Firebase-20232A?style=for-the-badge&logo=firebase&logoColor=FFFFFF',
// 	router:
// 		'React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white',
// 	postgres:
// 		'PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white',
// 	express:
// 		'Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white',
// 	tailwind:
// 		'Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white',
// 	python:
// 		'Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white',
// 	pandas:
// 		'pandas-150458.svg?style=for-the-badge&logo=pandas&logoColor=white',
// 	numpy:
// 		'NumPy-013243.svg?style=for-the-badge&logo=NumPy&logoColor=white',
// };

const badges = {
	html: 'HTML5-20232A?style=for-the-badge&logo=html5&logoColor=white',
	css: 'CSS3-20232A?style=for-the-badge&logo=css3&logoColor=white',
	react: 'React-61DAFB?style=for-the-badge&logo=react&logoColor=black',
	js: 'JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=white',
	jest: 'Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white',
	redux: 'Redux-593D88?style=for-the-badge&logo=redux&logoColor=white',
	firebase:
		'Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black',
	router:
		'React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white',
	postgres:
		'PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white',
	express:
		'Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white',
	tailwind:
		'Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white',
	python: 'Python-3776AB.svg?style=for-the-badge&logo=Python&logoColor=white',
	pandas: 'pandas-150458.svg?style=for-the-badge&logo=pandas&logoColor=white',
	numpy: 'NumPy-013243.svg?style=for-the-badge&logo=NumPy&logoColor=white',
	styledcomponents:
		'styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white',
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
