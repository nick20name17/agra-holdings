import type { AxiosResponse } from 'axios'

import type { RevenueYearsResponse } from 'types/revenueYears'

import { api } from './api'

export const getRevenueYears = async (): Promise<RevenueYearsResponse> => {
	try {
		const response: AxiosResponse<RevenueYearsResponse> = await api.get(
			'graph/revenue-years'
		)
		return response.data
	} catch (error) {
		console.error('Error fetching revenue data:', error)
		throw error
	}
}
