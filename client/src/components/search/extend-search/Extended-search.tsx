import { FC, useState } from 'react'
import styles from './extended-search.module.scss'
import { ExtendedSearchSlide, Select } from '@/components'

export const ExtendedSearch: FC = () => {
	const [selected, setSelected] = useState('')
	const janreOptions = ['исторические', 'биография', 'мелодрамы']
	const yearOptions = ['2021', '2022', '2023']
	const sortOptions = ['просмотру', 'рейтингу IMDB', 'избранные']

	const selectedHandler = (value: string) => {
		setSelected(value)
	}

	return (
		<div className={styles.search}>
			<div className={styles.search_wrap}>
				<div className={styles.search_actions}>
					<div className={styles.search_item}>
						<Select
							selected={selectedHandler}
							options={janreOptions}
							selectTitle='Выберите жанр'
						/>
					</div>
					<div className={styles.search_item}>
						<Select
							selected={selectedHandler}
							options={yearOptions}
							selectTitle='Выберите год'
						/>
					</div>
					<div className={styles.search_item}>
						<Select
							selected={selectedHandler}
							options={sortOptions}
							selectTitle='Сортировать по'
						/>
					</div>
				</div>
				<div className={styles.search_slider}>
					<ExtendedSearchSlide />
				</div>
			</div>
		</div>
	)
}
