'use client'

import { useCustomForm } from 'hooks/useCustomForm'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'
import type { infer as zodInfer } from 'zod'

import { CheckboxGroup } from 'components/CheckboxGroup/CheckboxGroup'
import { InputGroup } from 'components/InputGroup/InputGroup'
import { Button } from 'components/UI/Button/Button'

import { loginSchema } from 'config/validationSchemas'

import styles from './LoginForm.module.scss'

type FormData = zodInfer<typeof loginSchema>

export const LoginForm = () => {
	const router = useRouter()

	const { handleSubmit, register, errors } =
		useCustomForm<FormData>(loginSchema)

	const onSubmit: SubmitHandler<FormData> = formData => {
		console.log(formData)
		router.push('/')
	}

	return (
		<div className={`border ${styles.body}`}>
			<h2 className='text_fs-600 text_bold'>Login</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={styles.form}
				method='post'
				noValidate
			>
				<div className={styles.inputs}>
					<InputGroup
						register={register}
						errors={errors}
						label='Email'
						name='email'
						id='email'
						type='email'
						placeholder='Enter your email'
						inputMode='email'
					/>
					<InputGroup
						register={register}
						errors={errors}
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
