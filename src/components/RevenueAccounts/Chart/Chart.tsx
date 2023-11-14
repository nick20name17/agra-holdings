'use client'

import dynamic from 'next/dynamic'
import ApexChart from 'react-apexcharts'

import { Button } from 'components/UI/Button/Button'
import Select from 'components/UI/Select/Select'

import RefreshIcon from 'assets/images/refresh.svg'

import { charOptions } from 'config/chartOptions'

import styles from './Chart.module.scss'

const Chart = () => {
	const onSelectAccountChange = () => {}

	const options = [
		{
			label: 'label',
			value: '1'
		}
	]

	const series = [
		{
			name: 'series-1',
			data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
		}
	]

	return (
		<div className={styles.chart}>
			<div className={styles.toolbar}>
				<Select
					options={options}
					placeholder='2023'
					onChange={onSelectAccountChange}
				/>
				<Select
					options={options}
					placeholder='Select an account'
					onChange={onSelectAccountChange}
				/>
				<Button icon={<RefreshIcon />}>Update</Button>
			</div>
			<ApexChart options={charOptions} series={series} />
		</div>
	)
}

export default Chart
