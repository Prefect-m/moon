import React, { FC } from 'react'
import styles from './Fields.module.scss'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { AiFillLock } from 'react-icons/ai'
import { Input } from '@/components'
import { IFieldsProps } from './Fields.props'

export const Fields: FC<IFieldsProps> = ({
	Icon,
	name,
	type,
	fieldName,
	isRequired,
	reference,
}) => {
	return (
		<>
			<div className={styles.field}>
				<Input
					className={styles.field_input}
					type={type}
					id={name}
					name={name}
					required={isRequired}
					ref={reference}
				/>
				<div className={styles.field_label}>
					<Icon />
					<label htmlFor={name}>{fieldName}</label>
				</div>
			</div>
		</>
	)
}
