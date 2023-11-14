'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import ArrowDrowdownIcon from 'assets/images/arrow-dropdown.svg'
import LogoutIcon from 'assets/images/logout.svg'
import SettingsIcon from 'assets/images/settings.svg'

import { routes } from '../../utils/routes'

import styles from './UserDropdown.module.scss'

export const UserDropdown: React.FC = () => {
	const pathname = usePathname()

	const [open, setOpen] = useState(false)
	const handleClick = () => setOpen(prev => !prev)

	const menuBtnClass = open ? styles.rotated : ''
	const optionsClass = open ? styles.open : ''

	useEffect(() => {
		setOpen(false)
	}, [pathname])

	return (
		<div className={styles.dropdown}>
			<button onClick={handleClick} className={styles.menu}>
				<span>Arnold Frey</span>
				<span className={`${styles.btn} ${menuBtnClass}`}>
					<ArrowDrowdownIcon/>
				</span>
			</button>
			<div className={`${styles.options} ${optionsClass}`}>
				<Link className={styles.option} href={routes.settings}>
					<SettingsIcon />
					<span>Settings</span>
				</Link>
				<Link className={styles.option} href='/'>
					<LogoutIcon/>
					<span>Logout</span>
				</Link>
			</div>
		</div>
	)
}
