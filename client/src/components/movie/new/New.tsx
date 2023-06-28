import { FC } from 'react'
import styles from './new.module.scss'
import { Button, Duration, Rating, Titles } from '@/components'

export const NewMovie: FC = () => {
	return (
		<div className={styles.movie}>
			<div className={styles.movie_wrap}>
				<div
					className={styles.media}
					style={{
						backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687688629/moon/62918329_605_hgbeuw.jpg)`,
					}}
				>
					<div className={styles.media_top}>
						<Rating rating={8.2} size={40} />
						<Duration time={2.48} />
					</div>
					<div className={styles.media_name}>
						<span>Премия «Оскар» за лучший фильм</span>
						<Titles size='1xl'>На Западном фронте без перемен</Titles>
						<div className={styles.media_action}>
							<Button btnType='play-online' color='white' size='2xl'>
								смотреть
							</Button>
						</div>
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.content_desc}>
						<div className={styles.content_name}>
							<Titles size='4xl'>Трейлер</Titles>
							<Duration time={1.32} />
						</div>
						<div className={styles.content_action}>
							<Button btnType='play-online' size='1xl' color='black'>
								смотреть
							</Button>
							<div className={styles.content_views}>29 сентября 2022 г.</div>
						</div>
					</div>
					<div
						className={styles.content_image}
						style={{
							backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687705091/moon/100x64_3_w0uqkv.jpg)`,
						}}
					>
						<div className={styles.content_btn}>
							<Button btnType='play' size='2xl' color='white' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
{
	/* <div className={styles.content_desc}>
						<div className={styles.content_item}>
							<span>Год производства:</span>
							<span>2022</span>
						</div>
						<div className={styles.content_item}>
							<span>Платформа:</span>
							<span>Netflix</span>
						</div>
						<div className={styles.content_item}>
							<span>Страна:</span>
							<span>Германия, США, Великобритания</span>
						</div>
						<div className={styles.content_item}>
							<span>Жанр:</span>
							<span>военный, боевик, драма, история</span>
						</div>
						<div className={styles.content_item}>
							<span>Слоган:</span>
							<span>
								«In the midst of the chaos and brutality of World War One trench
								warfare, there is still hope»
							</span>
						</div>
						<div className={styles.content_item}>
							<span>Режиссер:</span>
							<span>Эдвард Бергер</span>
						</div>

						<div className={styles.content_item}>
							<span>Сценарий:</span>
							<span>Эдвард Бергер, Лесли Патерсон, Иэн Стокелл</span>
						</div>
						<div className={styles.content_item}>
							<span>Продюсер:</span>
							<span>Эдвард Бергер, Даниэль Брюль, Даниэль Марк Дрейфусс</span>
						</div>
						<div className={styles.content_item}>
							<span>Оператор:</span>
							<span>Джеймс Френд</span>
						</div>
						<div className={styles.content_item}>
							<span>Композитор:</span>
							<span>Фолькер Бертельман</span>
						</div>
						<div className={styles.content_item}>
							<span>Художник:</span>
							<span>Патрик Херцберг, Индржих Кочи, Милена Кубкова</span>
						</div>
						<div className={styles.content_item}>
							<span>Монтаж:</span>
							<span>Свен Будельман</span>
						</div>
						<div className={styles.content_item}>
							<span>Премьера в мире:</span>
							<span>12 сентября 2022</span>
						</div>
						<div className={styles.content_item}>
							<span>Время:</span>
							<span>2ч 48мин</span>
						</div>
					</div> */
}
