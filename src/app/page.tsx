import { Metadata } from 'next'

import { GeneralInfo } from 'components/GeneralInfo/GeneralInfo'
import { TotalRevenue } from 'components/TotalRevenue/TotalRevenue'

export const metadata: Metadata = {
	title: 'Agra Holdings',
	description: 'Agra Holdings',
	icons: {
		icon: './favicon.svg'
	}
}

export default function Home() {
	return (
		<>
			<GeneralInfo />
			<TotalRevenue />
		</>
	)
}
