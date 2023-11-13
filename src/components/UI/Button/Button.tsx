import { PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
	children,
	icon = '',
	...attrs
}) => {
	const btnClasses = `${styles.btn} ${icon ? styles.btn_icon : ''}`

	return (
		<button className={btnClasses} {...attrs}>
			{icon}
			{children}
		</button>
	)
}
