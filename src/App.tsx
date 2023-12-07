import './App.css'
import { NavBar, Slider } from './components'
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, Projects } from './pages';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Home />
				<Slider />
				<Experience />
				<Slider />
				<Projects />
				<Contact />
			</BrowserRouter>
		</>
	);
}

export default App
