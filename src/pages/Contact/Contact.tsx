import { Container, Typography } from '@mui/material';
import './Contact.css';

function Contact() {
	return (
		<Container maxWidth="lg">
			<div className="contact-container">
				<Typography variant="h1" className="projects-title">
					Contact
				</Typography>

				<div className='socials'>
					<a className="social-item" href="https://www.linkedin.com/in/edisonlg/" target="_blank">
						<img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="LinkedIn" />
						Linkedin
					</a>
					<a className="social-item" href="mailto: edy17496@gmail.com" target="_blank">
						<img src="https://img.icons8.com/ios/50/000000/gmail.png" alt="Gmail" />
						Gmail
					</a>

					<a className="social-item" href="https://github.com/EdiiDD" target="_blank">
						<img src="https://img.icons8.com/ios/50/000000/github.png" alt="GitHub" />
						GitHub
					</a>
				</div>
			</div>
		</Container >
	);
};

export default Contact;
