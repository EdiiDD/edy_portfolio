import { Container, Typography } from '@mui/material';
import './Experience.css';
import { experiences } from './experiences';

function Experience() {
	return (
		<Container maxWidth="lg" sx={{ padding: 0 }}>
			<div className="experience-container">
				<Typography
					variant="h2"
					className="experience-title"
					sx={{
						fontSize: { xs: '2rem', md: '3rem' },
						fontWeight: 'bold'
					}}
				>
					Experience
				</Typography>

				{experiences.map((experience) => (
					<div key={experience.id} className="experience">
						<a
							className="link-company"
							href={experience.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							🔗 {experience.company}
						</a>
						<div className="date">📅 {experience.date}</div>
						<div className="description">{experience.description}</div>
					</div>
				))}
			</div>
		</Container>
	);
};

export default Experience;
