import { FC, PropsWithChildren } from 'react'
import styles from './Title.module.scss'
import { ITitleProps } from './Title.props'
import classNames from 'classnames'

export const TitleCompoent: FC<PropsWithChildren<ITitleProps>> = ({
	type,
	children,
	subtitle,
	className,
}) => {
	switch (type) {
		case 'large':
			return (
				<h1
					className={classNames(styles.title, className, {
						[styles.title_large]: type === 'large',
					})}
				>
					{children}
					{subtitle ? (
						<span className={styles.subtitle}>{subtitle}</span>
					) : null}
				</h1>
			)
		case 'large-x':
			return (
				<h2
					className={classNames(styles.title, className, {
						[styles.title_largex]: type === 'large-x',
					})}
				>
					{children}
					{subtitle ? (
						<span className={styles.subtitle}>{subtitle}</span>
					) : null}
				</h2>
			)
		case 'medium':
			return (
				<h3
					className={classNames(styles.title, className, {
						[styles.title_medium]: type === 'medium',
					})}
				>
					{children}
					{subtitle ? (
						<span className={styles.subtitle}>{subtitle}</span>
					) : null}
				</h3>
			)
		case 'small':
			return (
				<h5
					className={classNames(styles.title, className, {
						[styles.title_small]: type === 'small',
					})}
				>
					{children}
					{subtitle ? (
						<span className={styles.subtitle}>{subtitle}</span>
					) : null}
				</h5>
			)
		default:
			return (
				<h1 className={styles.title_default}>
					{children}
					{subtitle ? (
						<span className={styles.subtitle}>{subtitle}</span>
					) : null}
				</h1>
			)
	}
}
