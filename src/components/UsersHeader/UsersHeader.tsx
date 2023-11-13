import Image from 'next/image'

import addCircleIcon from 'assets/images/add-circle.svg'
import arrowLeftIcon from 'assets/images/arrow-left.svg'

import styles from './UserHeader.module.scss'

const UsersHeader = () => {
	return (
		<div className={styles.header}>
			<div className={styles.left}>
				<button className={styles.arrow}>
					<Image priority src={arrowLeftIcon} alt='arrow' />
				</button>
				<h1 className='text_dark-800 text_fs-600 text_semi-bold'>
					User Management
				</h1>
			</div>
			<button
				className={`text_dark-800 text_semi-bold text_fs-400 ${styles.btn}`}
			>
				<Image priority src={addCircleIcon} alt='add' />
				Add New User
			</button>
		</div>
	)
}

export default UsersHeader
