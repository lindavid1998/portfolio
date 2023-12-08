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
};

// const badges = {
// 	html: 'HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
// 	css: 'CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
// 	react: 'React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
// 	js: 'JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
// 	jest: 'Jest-323330?style=for-the-badge&logo=Jest&logoColor=white',
// 	redux: 'Redux-593D88?style=for-the-badge&logo=redux&logoColor=white',
// 	firebase: 'Firebase-20232A?style=for-the-badge&logo=firebase',
// };

const Stack = ({ stack }) => {
	const parentURL = 'https://img.shields.io/badge/';

	return (
		<Container>
			{stack.map((item, index) => (
				badges[item] ? <img
					key={index}
					src={parentURL + badges[item]}
					alt={`Badge for ${item}`}
        /> : <p key={index}>{item}</p>
			))}
		</Container>
	);
};

export default Stack;
