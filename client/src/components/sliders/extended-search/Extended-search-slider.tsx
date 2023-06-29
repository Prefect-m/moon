import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Mousewheel } from 'swiper'
import styles from './extended-search-slider.module.scss'
import { Button, Titles } from '@/components'
import { MOVIE_DATA } from '@/movie.data'
import { useScreen } from '@/hooks'

export const ExtendedSearchSlide: FC = () => {
	const { handlerActive, handlerSource } = useScreen()

	return (
		<>
			<Swiper
				loop
				autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
				speed={400}
				slidesPerView={3}
				spaceBetween={20}
				className={styles.slider}
				modules={[Autoplay, Mousewheel]}
				grabCursor
				freeMode={{
					enabled: true,
					sticky: false,
					momentumBounce: false,
				}}
				mousewheel={{
					sensitivity: 4,
				}}
			>
				{MOVIE_DATA.map((movie) => (
					<SwiperSlide className={styles.slide} key={movie.id}>
						<div
							className={styles.slide_image}
							style={{ backgroundImage: `url(${movie.overlay_poster})` }}
						>
							<Button
								btnType='play'
								size='3xl'
								color='white'
								onClick={() => {
									handlerActive()
									handlerSource(
										movie.source ? movie.source : '',
										movie.overlay_poster ? movie.overlay_poster : ''
									)
								}}
							/>
						</div>
						<div className={styles.slide_description}>
							<Titles size='4xl' className={styles.slide_name}>
								{movie.title}
								<span>{movie.jenre}</span>
							</Titles>
							<Button btnType='play-online' size='1xl' color='black'>
								смотреть трейлер
							</Button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
