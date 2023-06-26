import { FC } from 'react'
import styles from './duration.module.scss'

export const Duration: FC<{ time: number }> = ({ time }) => {
	return (
		<span className={styles.duration}>
			{time.toString().replace('.', ' : ')} мин
		</span>
	)
}
