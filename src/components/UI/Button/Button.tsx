import { PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends PropsWithChildren {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
	return <button className={styles.btn}>{children}</button>
}
