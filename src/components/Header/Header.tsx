import { UserDropdown } from 'components/UserDropdown/UserDropdown'

import { Logo } from '../Logo/Logo'

import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={`border-bottom ${styles.header}`}>
			<Logo />
			<UserDropdown />
		</header>
	)
}
