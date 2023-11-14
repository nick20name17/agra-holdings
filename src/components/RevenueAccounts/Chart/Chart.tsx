'use client'

import { useState } from 'react'
import ApexChart from 'react-apexcharts'
import { capitalize } from 'utils/capitalize'

import { Button } from 'components/UI/Button/Button'
import Select from 'components/UI/Select/Select'

import RefreshIcon from 'assets/images/refresh.svg'

import { charOptions } from 'config/chartOptions'

import { RevenuesProps } from 'types/revenue'
import { MultiOption, SingleOption } from 'types/select'

import styles from './Chart.module.scss'

const Chart: React.FC<RevenuesProps> = ({ revenues }) => {
	const [currentYears, setCurrentYears] = useState<string[]>([])

	const onSelectYearChange = (option: MultiOption | SingleOption) => {
		if (option) {
			const years = (option as MultiOption).map(year => year.value)

			setCurrentYears(years)
		}
	}

	const series = currentYears.map(year => {
		const currentRevenue = revenues.find(revenue => revenue.year === year)

		const { year: _, ...months } = currentRevenue || {}

		const seriesData = Object.values(months).map(item => +item)

		return {
			name: currentRevenue?.year,
			data: seriesData
		}
	})

	const { year: revenueYear, ...months } = revenues[0] || {}

	Object.keys(months).forEach(key => {
		charOptions.xaxis?.categories.push(capitalize(key))
	})

	const yearsOptions = revenues.map(revenue => ({
		label: revenue.year,
		value: revenue.year
	}))

	return (
		<div className={styles.chart}>
			<div className={styles.toolbar}>
				<Select
					options={yearsOptions}
					placeholder='2022-2023'
					isMulti
					onChange={onSelectYearChange}
				/>
				<Select
					options={yearsOptions}
					isMulti
					placeholder='Select an account'
					onChange={onSelectYearChange}
				/>
				<Button icon={<RefreshIcon />}>Update</Button>
			</div>
			<ApexChart
				type='area'
				height={420}
				options={charOptions}
				series={series}
			/>
		</div>
	)
}

export default Chart
