import type { AxiosResponse } from 'axios'

import type { RevenueAccountsResponse } from 'types/revenueAccounts'

import { api } from './api'

export const getRevenueAccouts = async (
	year: string
): Promise<RevenueAccountsResponse> => {
	try {
		const response: AxiosResponse<RevenueAccountsResponse> = await api.get(
			`graph/revenue-accounts?${year}`
		)
		return response.data
	} catch (error) {
		console.error('Error fetching revenue data:', error)
		throw error
	}
}
