import type { ApexOptions } from 'apexcharts'

export const charOptions: ApexOptions = {
	chart: { zoom: { enabled: false } },
	dataLabels: { enabled: false },
	stroke: { curve: 'smooth' },
	xaxis: {
		categories: [],
		labels: {
			offsetY: 4,
			style: {
				colors: ['#171717'],
				fontSize: '0.7em',
				fontFamily: '"Inter", sans-serif',
				fontWeight: 500
			}
		}
	},
	yaxis: {
		labels: {
			formatter: val => {
				return '$ ' + val
			},
			style: {
				colors: ['#171717'],
				fontSize: '0.7em',
				fontFamily: '"Inter", sans-serif',
				fontWeight: 500
			},
			offsetX: -5
		}
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return '$ ' + val
			}
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.7,
			opacityTo: 0.9,
			stops: [0, 90, 100]
		}
	},
	colors: [
		'#1DBE5D',
		'#f7d828',
		'#6d90c7',
		'#b37366',
		'#6e9994',
		'#55d9cc',
		'#e36d5d',
		'#563da6',
		'#9bb562',
		'#a31f26'
	],
	markers: { size: 5 },
	grid: { show: true, borderColor: '#ccc' }
}
