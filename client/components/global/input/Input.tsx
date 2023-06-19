import { forwardRef } from 'react'
import { IInputProps } from './Input.props'
import styles from './Input.module.scss'
import classNames from 'classnames'

export const Input = forwardRef<HTMLInputElement, IInputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				className={classNames(styles.input, className)}
				type={type}
				ref={ref}
				{...props}
			/>
		)
	}
)
