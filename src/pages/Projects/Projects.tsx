import { Container, Grid, Typography } from '@mui/material';
import './Projects.css';
import { projects, techList1, techList2 } from './skills';

function Projects() {
	return (
		<Container
			id="projects"
			maxWidth="lg"
			sx={{
				padding: { xs: 0 },
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center'
			}}
		>
			<div className="projects-container">
				<Typography
					variant="h2"
					className="projects-title"
					sx={{
						fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
						fontWeight: 'bold',
						marginBottom: { xs: '1.5rem', sm: '2rem', md: '3rem' }
					}}
				>
					Projects & Skills
				</Typography>

				<div className="projects-list">
					{projects.map((project) => (
						<div key={project.id} className="experience">
							<a
								className="link-company"
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								🔗 {project.company}
							</a>
							<div className="description">{project.description}</div>
						</div>
					))}
				</div>

				<Typography
					variant="h4"
					className="projects-title"
					sx={{
						marginTop: { xs: '2rem', sm: '2.5rem', md: '3rem' },
						fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
						marginBottom: { xs: '1rem', sm: '1.5rem', md: '2rem' }
					}}
				>
					Technologies & Tools 🛠️
				</Typography>

				<Grid
					container
					spacing={{ xs: 2, sm: 3, md: 4 }}
					sx={{ width: '100%', margin: 0 }}
				>
					<Grid item xs={12} sm={6}>
						{techList1.map((tech, index) => (
							<Typography
								key={index}
								className="tech-item"
								sx={{
									fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
									padding: { xs: '0.35rem 0', sm: '0.4rem 0', md: '0.5rem 0' }
								}}
							>
								{tech}
							</Typography>
						))}
					</Grid>
					<Grid item xs={12} sm={6}>
						{techList2.map((tech, index) => (
							<Typography
								key={index}
								className="tech-item"
								sx={{
									fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' },
									padding: { xs: '0.35rem 0', sm: '0.4rem 0', md: '0.5rem 0' }
								}}
							>
								{tech}
							</Typography>
						))}
					</Grid>
				</Grid>
			</div>
		</Container>
	);
};

export default Projects;
