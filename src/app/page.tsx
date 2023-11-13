import { Metadata } from 'next'

import { GeneralInfo } from 'components/GeneralInfo/GeneralInfo'

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
		</>
	)
}
