import css from "./css.module.css";

export default function Spinner({ isVisible }: Props) {
	if (!isVisible) return null;
	return <div className={css.spinner}></div>;
}

type Props = {
	isVisible?: boolean;
};
