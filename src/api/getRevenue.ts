import type { AxiosResponse } from 'axios'

import type { RevenueResponse } from 'types/revenue'

import { api } from './api'

export const getRevenue = async (): Promise<RevenueResponse> => {
	try {
		const response: AxiosResponse<RevenueResponse> =
			await api.get('graph/revenue')
		return response.data
	} catch (error) {
		console.error('Error fetching revenue data:', error)
		throw error
	}
}
