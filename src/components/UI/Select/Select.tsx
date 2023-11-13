'use client'

import ReactSelect from 'react-select'

import downArrowIcon from 'assets/images/arrow-down.svg'

import styles from './Select.module.scss'

interface Option {
	label: string
	value: string
}

interface SelectProps {
	options: Option[]
	placeholder?: string
	onChange: () => void
}

const Select: React.FC<SelectProps> = ({ options, placeholder, onChange }) => {
	return (
		<ReactSelect
			className='react-select-container'
			classNamePrefix='react-select'
			unstyled
			isSearchable={false}
			options={options}
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default Select
