import { DetailsHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends DetailsHTMLAttributes<HTMLButtonElement> {
	typeBtn: 'play' | 'pause' | 'background' | 'transparent' | 'play-online'
	size: '1xl' | '2xl' | '3xl' | '4xl'
	color?: 'purple' | 'white' | 'black'
	background?: boolean
	children?: ReactNode
}
