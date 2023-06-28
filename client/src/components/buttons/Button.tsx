import { forwardRef } from 'react'
import { IButtonProps } from './Button.props'
import classNames from 'classnames'
import styles from './button.module.scss'
import { BsPlayCircle, BsFillPlayFill } from 'react-icons/bs'
import { IoCloseSharp } from 'react-icons/io5'

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
	(
		{ className, type, children, size, color, btnType, Icon, ...props },
		ref
	) => {
		return (
			<button
				type={type}
				className={classNames(styles.button, className, {
					[styles.button_white]: color === 'white',
					[styles.button_purple]: color === 'purple',
					[styles.button_play]: btnType === 'play',
					[styles.button_playonline]: btnType === 'play-online',
					[styles.button_background]: btnType === 'background',
					[styles.button_4xl]: size === '4xl',
					[styles.button_3xl]: size === '3xl',
					[styles.button_2xl]: size === '2xl',
					[styles.button_1xl]: size === '1xl',
				})}
				{...props}
				ref={ref}
			>
				{btnType === 'play' && <BsPlayCircle />}
				{btnType === 'play-online' && <BsFillPlayFill />}
				{btnType === 'close' && (
					<div className={styles.button_close}>
						<IoCloseSharp />
						<span>close</span>
					</div>
				)}
				{Icon && <Icon />}
				<span>{children && children}</span>
			</button>
		)
	}
)
