import Chart from './Chart/Chart'
import styles from './RevenueAccounts.module.scss'

export const RevenueAccounts = () => {
	return (
		<section className='section'>
			<div className='container'>
				<h2 className='second-heading'>General info</h2>
				<Chart />
			</div>
		</section>
	)
}
