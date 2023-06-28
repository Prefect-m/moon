import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: string
	btnType: 'play' | 'pause' | 'background' | 'play-online' | 'close'
	size: '1xl' | '2xl' | '3xl' | '4xl'
	color?: 'white' | 'black' | 'purple'
	Icon?: IconType
}
