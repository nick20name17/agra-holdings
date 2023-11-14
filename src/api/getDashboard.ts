import type { AxiosResponse } from 'axios'

import type { DashboardResponse } from 'types/dashboard'

import { api } from './api'

export const getDashboard = async (): Promise<DashboardResponse> => {
	try {
		const response: AxiosResponse<DashboardResponse> =
			await api.get('dashboard')
		return response.data
	} catch (error) {
		console.error('Error fetching dashboard data:', error)
		throw error
	}
}
