import { FC } from 'react'
import { IButtonProps } from './ButtonComponent.props'
import styles from './ButtonComponent.module.scss'
import classNames from 'classnames'

export const ButtonComponent: FC<IButtonProps> = ({
	size,
	typeBtn,
	color,
	background,
	children,
	...props
}) => {
	switch (typeBtn) {
		case 'background':
			return (
				<button
					{...props}
					className={classNames(styles.button, styles.button_background)}
				>
					{children}
				</button>
			)
		case 'pause':
			return <button {...props} {...props} className={styles.button}></button>
		case 'play':
			return (
				<button
					{...props}
					className={classNames(styles.button, {
						[styles.button_play]: typeBtn === 'play',
						[styles.button_purple]: color === 'purple',
						[styles.button_white]: color === 'white',
						[styles.button_black]: color === 'black',
						[styles.button_2xl]: size === '2xl',
						[styles.button_3xl]: size === '3xl',
						[styles.button_4xl]: size === '4xl',
					})}
				>
					<svg
						width='31'
						height='31'
						viewBox='0 0 31 31'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='15.5' cy='15.5' r='15' stroke='black' />
						<path
							d='M21.1836 16.0933L12.4003 21.1643L12.4003 11.0222L21.1836 16.0933Z'
							fill='black'
						/>
					</svg>
				</button>
			)
		case 'transparent':
			return <button {...props} className={styles.button}></button>
		case 'play-online':
			return (
				<button
					{...props}
					className={classNames(styles.button, styles.button_online, {
						[styles.button_purple]: color === 'purple',
						[styles.button_white]: color === 'white',
						[styles.button_black]: color === 'black',
						[styles.button_2xl]: size === '2xl',
						[styles.button_3xl]: size === '3xl',
						[styles.button_4xl]: size === '4xl',
					})}
				>
					<svg
						width='11'
						height='12'
						viewBox='0 0 11 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9.03848 4.27244C10.3615 5.0442 10.3615 6.9558 9.03847 7.72756L3.00774 11.2455C1.67443 12.0233 4.26449e-07 11.0615 4.93921e-07 9.51793L8.01468e-07 2.48207C8.6894e-07 0.938492 1.67443 -0.02325 3.00774 0.754516L9.03848 4.27244Z'
							fill='black'
						/>
					</svg>
					<span>Смотреть онлайн</span>
				</button>
			)
		default:
			return <button {...props} className={styles.button}></button>
	}
}
