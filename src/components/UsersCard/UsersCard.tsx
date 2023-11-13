import styles from './UsersCard.module.scss'

interface UserCardProps {
	name: string
	date: string
	avatar: React.ReactNode
	role: string
}

const UsersCard: React.FC<UserCardProps> = ({ name, date, avatar, role }) => {
	return (
		<div className={`${styles.card} text_dark-800 text_semi-bold text_fs-400`}>
			<div className={styles.header}>
				<div className={styles.icon}>{avatar}</div>
				<h2>{name}</h2>
			</div>
			<div className='text_dark-500'>{date}</div>
			<div>{role}</div>
			<button className={styles.more}>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id='Icon / More'>
						<path
							id='Vector'
							d='M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z'
							fill='#A9A9A9'
						/>
					</g>
				</svg>
			</button>
		</div>
	)
}

export default UsersCard
