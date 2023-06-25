import { forwardRef } from 'react'
import { IButtonProps } from './Button.props'
import classNames from 'classnames'
import styles from './button.module.scss'
import { BsPlayCircle, BsFillPlayFill } from 'react-icons/bs'

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	({ className, type, children, size, color, btnType, ...props }, ref) => {
		return (
			<button
				type={type}
				className={classNames(styles.button, className, {
					[styles.button_white]: color === 'white',
					[styles.button_purple]: color === 'purple',
					[styles.button_playonline]: btnType === 'play-online',
					[styles.button_4xl]: size === '4xl',
					[styles.button_3xl]: size === '3xl',
					[styles.button_2xl]: size === '2xl',
					[styles.button_1xl]: size === '1xl',
				})}
			>
				{btnType === 'play' && <BsPlayCircle />}
				{btnType === 'play-online' && <BsFillPlayFill />}
				{children && children}
			</button>
		)
	}
)
