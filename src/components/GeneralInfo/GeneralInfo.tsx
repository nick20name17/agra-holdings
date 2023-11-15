import { getDashboard } from 'api/getDashboard'
import { getFormattedCurrentDate } from 'utils/format'

import { Card } from './Card/Card'
import styles from './GeneralInfo.module.scss'

export const GeneralInfo = async () => {
	const dashboard = await getDashboard()

	const cards = [
		{
			heading: 'Gross Revenue:',
			label: getFormattedCurrentDate(),
			totalPaid: dashboard.this_month_sales[1].total_paid,
			additialInfo: {
				heading: 'Last Year:',
				totalPaid: dashboard.this_month_sales[0].total_paid
			}
		},
		{
			heading: 'Year To Date:',
			totalPaid: dashboard.ytd_sales[1].total_paid,
			additialInfo: {
				heading: 'Last Year:',
				totalPaid: dashboard.ytd_sales[0].total_paid
			}
		},
		{
			heading: 'Total Receivables:',
			totalPaid: dashboard.total_receivables
		},
		{
			heading: 'Open Sales Orders:',
			totalPaid: dashboard.so_amount_sum,
			additialInfo: {
				heading: 'Tax:',
				totalPaid: dashboard.so_tax_sum
			}
		}
	]

	return (
		<section className={styles.section}>
			<div className='container'>
				<h2 className='second-heading'>General info</h2>
				<div className={styles.cards}>
					{cards.map(card => (
						<Card
							key={card.heading}
							heading={card.heading}
							label={card.label}
							totalPaid={card.totalPaid}
							additionalInfo={card.additialInfo}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
