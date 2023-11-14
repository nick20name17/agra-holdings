import axios from 'axios'

const baseURL = 'https://api-argra.dev-embs.com/api/'

export const api = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json'
	}
})

api.interceptors.request.use(
	config => {
		config.headers.Authorization = `Token 38e02694b051cff26709e1ee9d6fdb98a67f4b6f`
		return config
	},
	err => {
		throw new Error(err)
	}
)
