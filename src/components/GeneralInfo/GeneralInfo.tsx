import { Card } from './Card/Card'
import styles from './GeneralInfo.module.scss'

export const GeneralInfo = () => {
	return (
		<section className={styles.section}>
			<div className='container'>
				<h2 className='second-heading'>General info</h2>
				<div className={styles.cards}>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</section>
	)
}
