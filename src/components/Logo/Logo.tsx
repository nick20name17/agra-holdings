import Link from 'next/link'

import styles from './Logo.module.scss'

export const Logo = () => {
	return (
		<Link className={`text_fs-500 text_bold ${styles.logo}`} href='/'>
			<div className={styles.circle}></div>
			Agra Holdings
		</Link>
	)
}
