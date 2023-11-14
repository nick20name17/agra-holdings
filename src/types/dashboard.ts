export interface ThisMonthSale {
	year: string
	total_paid: string
}

export interface YtdSale {
	year: string
	total_paid: string
}

export interface DashboardResponse {
	this_month_sales: ThisMonthSale[]
	ytd_sales: YtdSale[]
	total_receivables: string
	so_amount_sum: string
	so_tax_sum: string
}
