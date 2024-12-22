import Container from "@mui/material/Container/Container";
import './Slider.css';

interface SliderProps {
	id?: string;
}

function Slider({ id }: SliderProps) {
	return (
		<>
			<div id={id} className="slider">
			</div>
		</>
	);
};

export default Slider;
