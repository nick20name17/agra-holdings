import { Metadata } from 'next'

import { LoginForm } from 'components/LoginForm/LoginForm'

import styles from './Login.module.scss'

export const metadata: Metadata = {
	title: 'Login'
}

const Login = () => {
	return (
		<section className={styles.login}>
			<div className={`container ${styles.content}`}>
				<h1 className='first-heading text_center'>ESC APP</h1>
				<LoginForm />
			</div>
		</section>
	)
}

export default Login
