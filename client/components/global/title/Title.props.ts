import { DetailedHTMLProps, DetailsHTMLAttributes, HTMLAttributes } from 'react'

export interface ITitleProps extends DetailsHTMLAttributes<HTMLTitleElement> {
	type?: 'small' | 'medium' | 'large' | 'large-x'
	subtitle?: string
}
