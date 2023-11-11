import { GeneralInfo } from 'components/GeneralInfo/GeneralInfo'
import { Metadata } from 'next'

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
