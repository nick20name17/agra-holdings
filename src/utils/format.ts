export const formatCurrency = (
	amount: number,
	locale: string = 'en-US',
	currency: string = 'USD'
): string => {
	const formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 2
	})

	return formatter.format(amount)
}

export const getFormattedCurrentDate = () => {
	const options: Intl.DateTimeFormatOptions = {
		month: 'short',
		year: 'numeric'
	}
	const currentDate = new Date().toLocaleDateString('en-US', options)

	return currentDate
}
