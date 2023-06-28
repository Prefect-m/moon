import { FC, useState } from 'react'
import styles from './select.module.scss'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { ISelectProps } from './Select.props'

export const Select: FC<ISelectProps> = ({
	selected,
	options,
	selectTitle,
}) => {
	const [isActive, setIsActive] = useState(false)
	const [isSelected, setIsSelected] = useState('')

	return (
		<div className={styles.select}>
			<div
				className={styles.select_placeholder}
				onClick={() => setIsActive(!isActive)}
			>
				<span>{isSelected ? isSelected : `${selectTitle}`}</span>
				<MdOutlineKeyboardArrowDown />
			</div>
			{isActive && (
				<div className={styles.select_list}>
					{options.map((option, i) => (
						<div
							className={styles.select_item}
							key={i}
							onClick={(e) => {
								setIsSelected(option)
								selected(option)
								setIsActive(!isActive)
							}}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
