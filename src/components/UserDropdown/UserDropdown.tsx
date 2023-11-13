'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import arrowDrowdownIcon from 'assets/images/arrow-dropdown.svg'
import logoutIcon from 'assets/images/logout.svg'
import settingsIcon from 'assets/images/settings.svg'

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
					<Image priority src={arrowDrowdownIcon} alt='Arrow' />
				</span>
			</button>
			<div className={`${styles.options} ${optionsClass}`}>
				<Link className={styles.option} href={routes.settings}>
					<Image priority src={settingsIcon} alt='Settings' />
					<span>Settings</span>
				</Link>
				<Link className={styles.option} href='/'>
					<Image priority src={logoutIcon} alt='Logout' />
					<span>Logout</span>
				</Link>
			</div>
		</div>
	)
}
