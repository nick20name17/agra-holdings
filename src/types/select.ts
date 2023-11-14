import { MultiValue, SingleValue } from 'react-select'

export interface Option {
	label: string
	value: string
}

export type SingleOption = SingleValue<Option>
export type MultiOption = MultiValue<Option>
