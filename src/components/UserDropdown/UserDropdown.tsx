'use client'
import { useState, useEffect } from 'react'

import styles from './UserDropdown.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
			<div onClick={handleClick} className={styles.menu}>
				<span>Arnold Frey</span>
				<button className={`${styles.btn} ${menuBtnClass}`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
					>
						<path
							d='M9 10.9019L12.9591 6.96964C13.2544 6.67679 13.7332 6.67679 14.0285 6.96964C14.3238 7.26249 14.3238 7.73729 14.0285 8.03014L9.5348 12.4926C9.23944 12.7854 8.76056 12.7854 8.4652 12.4926L3.97149 8.03014C3.67617 7.73729 3.67617 7.26249 3.97149 6.96964C4.26681 6.67679 4.74561 6.67679 5.04093 6.96964L9 10.9019Z'
							fill='#8B8B8B'
						/>
					</svg>
				</button>
			</div>
			<div className={`${styles.options} ${optionsClass}`}>
				<Link className={styles.option} href='/settings'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
					>
						<path
							d='M7.99793 1.33015C8.61778 0.971284 9.38222 0.971284 10.0021 1.33015L15.1271 4.29725C15.7447 4.65483 16.125 5.31443 16.125 6.0281V11.9719C16.125 12.6856 15.7447 13.3452 15.1271 13.7027L10.0021 16.6699C9.38222 17.0287 8.61778 17.0287 7.99793 16.6699L2.87293 13.7027C2.25529 13.3452 1.875 12.6856 1.875 11.9719V6.02811C1.875 5.31443 2.25529 4.65483 2.87293 4.29725L7.99793 1.33015ZM9 11.25C10.2427 11.25 11.25 10.2427 11.25 9C11.25 7.75732 10.2427 6.75 9 6.75C7.75732 6.75 6.75 7.75732 6.75 9C6.75 10.2427 7.75732 11.25 9 11.25Z'
							fill='#8B8B8B'
						/>
					</svg>
					<span>Settings</span>
				</Link>
				<Link className={styles.option} href='/'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M3.25 2.5C3.05109 2.5 2.86032 2.57902 2.71967 2.71967C2.57902 2.86032 2.5 3.05109 2.5 3.25V13.75C2.5 13.9489 2.57902 14.1397 2.71967 14.2803C2.86032 14.421 3.05109 14.5 3.25 14.5H6.25C6.66421 14.5 7 14.8358 7 15.25C7 15.6642 6.66421 16 6.25 16H3.25C2.65326 16 2.08097 15.7629 1.65901 15.341C1.23705 14.919 1 14.3467 1 13.75V3.25C1 2.65326 1.23705 2.08097 1.65901 1.65901C2.08097 1.23705 2.65326 1 3.25 1H6.25C6.66421 1 7 1.33579 7 1.75C7 2.16421 6.66421 2.5 6.25 2.5H3.25Z'
							fill='#8B8B8B'
						/>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M10.9697 4.21967C11.2626 3.92678 11.7374 3.92678 12.0303 4.21967L15.7803 7.96967C16.0732 8.26256 16.0732 8.73744 15.7803 9.03033L12.0303 12.7803C11.7374 13.0732 11.2626 13.0732 10.9697 12.7803C10.6768 12.4874 10.6768 12.0126 10.9697 11.7197L14.1893 8.5L10.9697 5.28033C10.6768 4.98744 10.6768 4.51256 10.9697 4.21967Z'
							fill='#8B8B8B'
						/>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M5.5 8.5C5.5 8.08579 5.83579 7.75 6.25 7.75H15.25C15.6642 7.75 16 8.08579 16 8.5C16 8.91421 15.6642 9.25 15.25 9.25H6.25C5.83579 9.25 5.5 8.91421 5.5 8.5Z'
							fill='#8B8B8B'
						/>
					</svg>
					<span>Logout</span>
				</Link>
			</div>
		</div>
	)
}
