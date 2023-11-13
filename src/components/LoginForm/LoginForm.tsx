import Link from 'next/link'

import { CheckboxGroup } from 'components/CheckboxGroup/CheckboxGroup'
import { InputGroup } from 'components/InputGroup/InputGroup'
import { Button } from 'components/UI/Button/Button'

import styles from './LoginForm.module.scss'

export const LoginForm = () => {
	return (
		<div className={`border ${styles.body}`}>
			<h2 className='text_fs-600 text_bold'>Login</h2>
			<form className={styles.form} method='post' noValidate>
				<div className={styles.inputs}>
					<InputGroup
						label='Email'
						name='email'
						id='email'
						type='email'
						placeholder='Enter your email'
						inputMode='email'
					/>
					<InputGroup
						label='Password'
						name='password'
						id='password'
						type='password'
						placeholder='••••••••••'
						inputMode='email'
					/>
					<div className={styles.options}>
						<CheckboxGroup
							label='Remember me'
							name='remember-me'
							id='remember-me'
						/>
						<Link
							className={`text_dark-500 text_fs-300 text_medium ${styles.link}`}
							href='/'
						>
							Forgot password?
						</Link>
					</div>
					<Button>Continue</Button>
				</div>
			</form>
		</div>
	)
}
