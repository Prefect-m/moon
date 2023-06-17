'use client'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import styles from './MovieSearch.module.scss'
import { IMovieSearchSliderProps } from './MovieSearch.props'
import { ButtonComponent } from '../../global/button/ButtonComponent'
import { TitleCompoent } from '../../global/title/Title'
import { usePlayerContext } from '@/app/hooks'

export const MovieSearchSlider: FC<IMovieSearchSliderProps> = ({ movies }) => {
	const { activeHandler, stateHandler } = usePlayerContext()
	return (
		<Swiper
			loop
			slidesPerView={2.8}
			centeredSlidesBounds
			autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
			speed={500}
			modules={[Autoplay, Navigation]}
			className={styles.slider}
		>
			{movies.map(movie => (
				<SwiperSlide key={movie.id} className={styles.slide}>
					<div className={styles.slide_image}>
						<img src={movie.overlayPoster} alt={movie.title} />
						<div className={styles.slide_action}>
							<ButtonComponent
								size='3xl'
								typeBtn='play'
								color='white'
								onClick={() => {
									activeHandler()
									stateHandler(
										movie.source ? movie.source : '',
										movie.overlayPoster ? movie.overlayPoster : ''
									)
								}}
							/>
						</div>
					</div>
					<div className={styles.slide_content}>
						<TitleCompoent
							type='large-x'
							subtitle={movie.genre}
							className={styles.slide_title}
						>
							{movie.title}
						</TitleCompoent>
						<ButtonComponent size='1xl' typeBtn='play-online' color='black' />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
