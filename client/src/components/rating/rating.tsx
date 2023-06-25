import { FC } from 'react'
import { LiaImdb } from 'react-icons/lia'
import styles from './rating.module.scss'

export const Rating: FC<{ rating: number; size: number }> = ({
	rating,
	size,
}) => {
	return (
		<div className={styles.rating}>
			<LiaImdb color='yellow' size={size} />
			{rating}
		</div>
	)
}
