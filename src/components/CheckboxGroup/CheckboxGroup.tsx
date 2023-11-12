import styles from './CheckboxGroup.module.scss'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

interface InputGroupProps extends InputProps {
	label: string
}

export const CheckboxGroup: React.FC<InputGroupProps> = ({
	name,
	id,
	label
}) => {
	return (
		<div className={styles.inputGroup}>
			<input className={styles.checkbox} id={id} type='checkbox' name={name} />
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
		</div>
	)
}
