import { FC, forwardRef } from 'react'
import styles from './field.module.scss'
import { IFieldProps } from './Field.props'
import classNames from 'classnames'

export const Field = forwardRef<HTMLInputElement, IFieldProps>(
	({ type = 'text', className, ...props }, ref) => {
		return (
			<input
				type={type}
				ref={ref}
				{...props}
				className={classNames(styles.input, className)}
			/>
		)
	}
)
