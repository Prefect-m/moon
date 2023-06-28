import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import styles from './extended-search-slider.module.scss'
import { Button, Titles } from '@/components'
import { searchMovies } from './placeholder.data'
import { CardMovies } from '@/components/pages/home/placeholder.data'

export const ExtendedSearchSlide: FC = () => {
	return (
		<>
			<Swiper
				loop
				autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
				speed={400}
				slidesPerView={3}
				spaceBetween={20}
				className={styles.slider}
				modules={[Autoplay]}
			>
				{searchMovies.map((movie) => (
					<SwiperSlide className={styles.slide} key={movie.id}>
						<div
							className={styles.slide_image}
							style={{ backgroundImage: `url(${movie.poster})` }}
						>
							<Button btnType='play' size='3xl' color='white' />
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
