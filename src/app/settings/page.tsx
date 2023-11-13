import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

import { SettingsCard } from 'components/SettingsCard/SettingsCard'

import settingsIcon from 'assets/images/settings.svg'
import userIcon from 'assets/images/user.svg'

import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Settings'
}

const Settings = () => {
	return (
		<section className='section'>
			<div className='container container_sm'>
				<h1 className='text_dark-800 text_fs-600 text_semi-bold'>
					Company Settings
				</h1>
				<div className={styles.list}>
					<SettingsCard
						text='Account Settings'
						icon={<Image priority src={settingsIcon} alt='Settings' />}
					/>
					<SettingsCard
						text='User Management'
						icon={<Image priority src={userIcon} alt='User' />}
					/>
				</div>
			</div>
		</section>
	)
}

export default Settings
