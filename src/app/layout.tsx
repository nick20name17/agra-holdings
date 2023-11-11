import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'assets/styles/index.scss'
import { Header } from 'components/Header/Header'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
	title: 'Agra Holdings',
	description: 'Agra Holdings',
	icons: {
		icon: './favicon.svg'
	}
}

const inter = Inter({
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap'
})

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<html className={inter.className} lang='en'>
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}

export default RootLayout
