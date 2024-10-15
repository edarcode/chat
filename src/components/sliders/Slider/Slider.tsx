import { useState, useEffect } from "react";
import css from "./css.module.css";

type Props = {
	images: string[];
	interval?: number; // Tiempo entre cada cambio de imagen (en milisegundos)
};

export default function Slider({ images, interval = 4000 }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const autoSlide = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
		}, interval);

		return () => clearInterval(autoSlide);
	}, [images.length, interval]);

	return (
		<div className={css.slider}>
			<div
				className={css.slides}
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div className={css.slide} key={index}>
						<img src={image} alt={`Slide ${index + 1}`} />
					</div>
				))}
			</div>
			<div className={css.controls}>
				{images.map((_, index) => (
					<button
						key={index}
						className={`${css.dot} ${currentIndex === index ? css.active : ""}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
		</div>
	);
}
