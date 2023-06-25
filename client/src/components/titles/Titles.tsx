import { FC, PropsWithChildren } from 'react'
import styles from './titles.module.scss'
import { ITitleProps } from './Titles.props'
import classnames from 'classnames'

export const Titles: FC<PropsWithChildren<ITitleProps>> = ({
	size,
	className,
	children,
	subtitle,
}) => {
	switch (size) {
		case '1xl':
			return (
				<>
					<h1
						className={classnames(styles.heading, className, {
							[styles.heading_1xl]: size === '1xl',
						})}
					>
						{children}
					</h1>
					{subtitle && (
						<span className={styles.heading_subtitle}>{subtitle}</span>
					)}
				</>
			)
		case '2xl':
			return (
				<h3
					className={classnames(styles.heading, className, {
						[styles.heading_2xl]: size === '2xl',
					})}
				>
					{children}
				</h3>
			)
		case '3xl':
			return (
				<h4
					className={classnames(styles.heading, className, {
						[styles.heading_3xl]: size === '3xl',
					})}
				>
					{children}
				</h4>
			)
		case '4xl':
			return (
				<h5
					className={classnames(styles.heading, className, {
						[styles.heading_4xl]: size === '4xl',
					})}
				>
					{children}
				</h5>
			)

		default:
			return (
				<h1
					className={classnames(styles.heading, className, {
						[styles.heading_1xl]: size === '1xl',
					})}
				>
					{children}
				</h1>
			)
	}
}
