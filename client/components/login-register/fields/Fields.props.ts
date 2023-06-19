import { HTMLInputTypeAttribute, Ref } from 'react'
import { IconType } from 'react-icons'

export interface IFieldsProps {
	Icon: IconType
	type: HTMLInputTypeAttribute
	name: string
	fieldName: string
	isRequired?: boolean
	reference: Ref<HTMLInputElement>
}
