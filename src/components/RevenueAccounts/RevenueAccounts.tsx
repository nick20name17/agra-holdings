import type { RevenuesProps } from 'types/revenue'

import Chart from './Chart/Chart'

export const RevenueAccounts: React.FC<RevenuesProps> = ({ revenues }) => {
	return (
		<section className='section'>
			<div className='container'>
				<h2 className='second-heading'>General info</h2>
				<Chart revenues={revenues} />
			</div>
		</section>
	)
}
