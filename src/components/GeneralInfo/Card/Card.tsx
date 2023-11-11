import styles from './Card.module.scss'

export const Card = () => {
	return (
		<article
			className={`text_fs-300 text_dark-800 text_semi-bold ${styles.card}`}
		>
			<div className={styles.header}>
				<h3 className=' '>Gross Revenue:</h3>
				<span className={styles.date}>Jun 2023</span>
			</div>
			<div className={styles.body}>
				<div className='text_fs-600 text_bold'>$18,000</div>
			</div>
			<div className={styles.footer}>
				<span className='text_dark-500'>Last Year:</span>
				<span>$17,500</span>
			</div>
		</article>
	)
}
