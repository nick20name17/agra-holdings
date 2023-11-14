import { getRevenue } from 'api/getRevenue'
import { Metadata } from 'next'

import { GeneralInfo } from 'components/GeneralInfo/GeneralInfo'
import { RevenueAccounts } from 'components/RevenueAccounts/RevenueAccounts'
import { TotalRevenue } from 'components/TotalRevenue/TotalRevenue'

export const metadata: Metadata = {
	title: 'Agra Holdings',
	description: 'Agra Holdings',
	icons: {
		icon: './favicon.svg'
	}
}

const Home = async () => {
	const revenues = await getRevenue()
	return (
		<>
			<GeneralInfo />
			<RevenueAccounts revenues={revenues} />
			<TotalRevenue />
		</>
	)
}

export default Home
