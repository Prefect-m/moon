import { FC } from 'react'
import styles from './new.module.scss'
import { Button, Rating, Titles } from '@/components'

export const NewMovie: FC = () => {
	return (
		<div className={styles.movie}>
			<div className={styles.wrap}>
				<div className={styles.movie_box}>
					<div
						className={styles.movie_image}
						style={{
							backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687688629/moon/62918329_605_hgbeuw.jpg)`,
						}}
					></div>
					<div className={styles.movie_box__top}>
						<div className={styles.movie_rating}>
							<Rating rating={8.2} size={40} />
						</div>
						<div className={styles.movie_jenre}>
							Жанр: Военный/Боевик
							<span>2 ч 28 мин</span>
						</div>
					</div>
					<div className={styles.movie_name}>
						<span>Премия «Оскар» за лучший фильм</span>
						<Titles size='1xl'>На Западном фронте без перемен</Titles>
						<div className={styles.movie_action}>
							<Button btnType='play-online' size='2xl' color='white'>
								Смотреть
							</Button>
						</div>
					</div>
				</div>
				<div className={styles.movie_box}>
					<div
						className={styles.movie_image}
						style={{
							backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687688645/moon/756624747983691_hxluif.jpg)`,
						}}
					></div>
				</div>
			</div>
		</div>
	)
}
