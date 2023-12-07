import { Container, Grid, Typography } from '@mui/material';
import './Projects.css';
import { projects, techList1, techList2 } from './skills';

function Projects() {
	return (
		<Container id="projects" maxWidth="lg">
			<Typography variant="h1" className="projects-title">
				Projects & Skills
			</Typography>

			<div>
				{projects.map((project) => (
					<div key={project.id} className="experience">
						<a className="link-company" href={project.link} > 🔗  {project.company}</a>
						<div className="description">{project.description}</div>
					</div>
				))}
			</div>


			<div>
				<Typography variant="h4" sx={{ marginTop: '30px' }} className="projects-title">
					Technologies & Tools 🛠️
				</Typography>

				<Grid container spacing={3}>
					<Grid item xs={6}>
						{techList1.map((tech, index) => (
							<Typography className="tech-item" sx={{ marginTop: '10px', fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }} key={index}>
								{tech}
							</Typography>
						))}
					</Grid>
					<Grid item xs={6}>
						{techList2.map((tech, index) => (
							<Typography className="tech-item" sx={{ marginTop: '10px', fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }} key={index}>
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
