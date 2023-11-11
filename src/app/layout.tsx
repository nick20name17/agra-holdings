import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import 'assets/styles/index.scss'

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

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html className={inter.className} lang='en'>
			<body>{children}</body>
		</html>
	)
}
