import { formatCurrency } from 'utils/format'

import styles from './Card.module.scss'

interface CardProps {
	heading: string
	label?: string
	totalPaid: string
	additionalInfo?: {
		heading: string
		totalPaid: string
	}
}

export const Card: React.FC<CardProps> = ({
	heading,
	label,
	totalPaid,
	additionalInfo
}) => {
	return (
		<article
			className={`text_fs-300 text_dark-800 text_semi-bold ${styles.card}`}
		>
			<div className={styles.header}>
				<h3 className=' '>{heading}</h3>
				{label ? <span className={styles.date}>{label}</span> : ''}
			</div>
			<div className={styles.body}>
				<div className='text_fs-600 text_bold'>
					{formatCurrency(+totalPaid)}
				</div>
			</div>
			{additionalInfo?.heading ? (
				<div className={styles.footer}>
					<span className='text_dark-500'>
						{additionalInfo?.heading}
					</span>
					<span>{formatCurrency(+additionalInfo?.totalPaid)}</span>
				</div>
			) : (
				''
			)}
		</article>
	)
}
