'use client'

import ReactSelect from 'react-select'

import type { MultiOption, Option, SingleOption } from 'types/select'

interface SelectProps {
	options: Option[]
	placeholder?: string
	isMulti?: boolean
	onChange: (option: MultiOption | SingleOption) => void
}

const Select: React.FC<SelectProps> = ({
	options,
	placeholder,
	isMulti = false,
	onChange
}) => {
	return (
		<ReactSelect
			className='react-select-container'
			classNamePrefix='react-select'
			unstyled
			isSearchable={false}
			noOptionsMessage={() => 'No available years'}
			options={options}
			isMulti={isMulti}
			placeholder={placeholder}
			onChange={onChange}
		/>
	)
}

export default Select
