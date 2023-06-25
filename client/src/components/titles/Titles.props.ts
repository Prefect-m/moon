import { DetailsHTMLAttributes } from 'react'

export interface ITitleProps extends DetailsHTMLAttributes<HTMLHeadingElement> {
	size: '1xl' | '2xl' | '3xl' | '4xl'
	subtitle?: string
}
