import { Metadata } from 'next'
import React from 'react'

import { SettingsCard } from 'components/SettingsCard/SettingsCard'

import SettingsIcon from 'assets/images/settings.svg'
import UserIcon from 'assets/images/user.svg'

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
						icon={<SettingsIcon />}
					/>
					<SettingsCard
						text='User Management'
						icon={<UserIcon />}
					/>
				</div>
			</div>
		</section>
	)
}

export default Settings
