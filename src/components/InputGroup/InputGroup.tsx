import styles from './InputGroup.module.scss'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

interface InputGroupProps extends InputProps {
	label: string
}

export const InputGroup: React.FC<InputGroupProps> = ({
	name,
	placeholder,
	id,
	label,
	type = 'text',
	inputMode
}) => {
	return (
		<div className={styles.inputGroup}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<input
				className={styles.input}
				id={id}
				type={type}
				name={name}
				placeholder={placeholder}
				inputMode={inputMode}
			/>
		</div>
	)
}
