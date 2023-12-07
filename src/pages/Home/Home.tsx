import { Container, Typography } from '@mui/material';
import './Home.css';

function Home() {
	return (
		<Container id="aboutme" maxWidth="lg">
			<div className="avatar-container">
				<img src="src/assets/edy_filantropo.jpg" alt="edy_avatar" className="avatar-image" />
				<div className="text-container">
					<Typography variant="h1" className="avatar-text-title">
						Hi, I'm Edy! 👋
					</Typography>
					<Typography variant="body2" className="avatar-text">
						A passionate Android developer with a robust background in creating innovative mobile applications.
						Throughout my career, I've had the opportunity to work on diverse projects, ranging from emerging startups to established enterprises,
						allowing me to cultivate a broad spectrum of skills and knowledge in the mobile development realm.
						<br /><br />

						My primary focus revolves around crafting intuitive and efficient user experiences.
						I bring expertise in Android app development using the latest technologies and architectures,
						specializing in the implementation of design patterns such as MVI and MVVM.
						<br /><br />

						I strongly believe in teamwork, open communication, and creative collaboration.
						I'm excited about the opportunity to contribute to challenging projects and continue learning in an environment that fosters professional growth.
					</Typography>
				</div>
			</div>
		</Container>
	);
};

export default Home;
