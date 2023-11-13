import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

import UsersCard from 'components/UsersCard/UsersCard'
import UsersHeader from 'components/UsersHeader/UsersHeader'

import avatar from 'assets/images/avatar.jpg'

import styles from './page.module.scss'

export const metadata: Metadata = {
	title: 'Users'
}

const Users = () => {
	return (
		<section className='section'>
			<div className='container container_sm'>
				<UsersHeader />
				<div className={styles.list}>
					<UsersCard
						name='Michel Froz'
						date='2022/12/12'
						role='Manager'
						avatar={<Image priority src={avatar} alt='Michel Froz' />}
					/>
					<UsersCard
						name='Michel Froz'
						date='2022/12/12'
						role='Manager'
						avatar={<Image priority src={avatar} alt='Michel Froz' />}
					/>
					<UsersCard
						name='Michel Froz'
						date='2022/12/12'
						role='Manager'
						avatar={<Image priority src={avatar} alt='Michel Froz' />}
					/>
				</div>
			</div>
		</section>
	)
}

export default Users
