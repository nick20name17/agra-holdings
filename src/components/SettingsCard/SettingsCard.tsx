import Image from 'next/image'

import arrowRightIcon from 'assets/images/arrow-right.svg'

import styles from './Settings.module.scss'

interface SettingsCardProps {
	text: string
	icon: React.ReactNode
}

export const SettingsCard: React.FC<SettingsCardProps> = ({ text, icon }) => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<span className={styles.icon}>{icon}</span>
				<h2 className='text_dark-800 text_semi-bold text_fs-400'>{text}</h2>
			</div>
			<Image priority src={arrowRightIcon} alt='arrow' />
		</div>
	)
}
