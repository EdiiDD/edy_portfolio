import { Container, Typography } from '@mui/material';
import './Experience.css';
import { experiences } from './experiences';

function Experience() {
	return (
		<Container id="experience" maxWidth="lg">
			<div className="experience-container">
				<Typography variant="h1" className="projects-title">
					Experience
				</Typography>

				{experiences.map((experience) => (
					<div key={experience.id} className="experience">
						<a className="link-company" href={experience.link} >🔗 {experience.company} </a>
						<div className="date" >📅 {experience.date}</div>
						<div className="description">{experience.description}</div>
					</div>
				))}
			</div>
		</Container >
	);
};

export default Experience;
