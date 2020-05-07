import React from 'react';

import ProjectCard from '../ProjectCard';

class Bio extends React.Component {

	render() {
		return (
			
				<ProjectCard 
					projectTitle="test" 
					projectSubtitle="subtitleTest" 
					projectDescription="this is where the description of the project will go " 
				/>
			
		)
	}
}

export default Bio;

