import type { ApexOptions } from 'apexcharts'

export const charOptions: ApexOptions = {
	chart: { height: 380, type: 'line', zoom: { enabled: false } },
	dataLabels: { enabled: false },
	stroke: { curve: 'straight' },
	xaxis: {
		categories: [],
		labels: {
			rotate: -45,
			rotateAlways: true,
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
