import css from "./css.module.css";
import { KINDS } from "./kinds";
import { Props } from "./types";
import { joinClass } from "./utils/joinClass";

export default function InputNumber(props: Props) {
	const { className, title, kind, err, ...extraProps } = props;

	const finalClass = joinClass([css.label, className]);
	const finalClassInput = joinClass([
		css.input,
		err && css.input__err,
		kind && KINDS[kind]
	]);

	return (
		<label className={finalClass}>
			{title && <span className={css.title}>{title}</span>}
			<input
				placeholder="Número"
				{...extraProps}
				type="number"
				className={finalClassInput}
			/>
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}
