import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectCreative } from 'swiper'
import styles from './hero-slider.module.scss'
import { Button, Duration, Titles } from '@/components'
import { HERO_MOVIE_DATA } from '@/movie.data'
import 'swiper/css'
import { useScreen } from '@/hooks'

export const HeroSlider: FC = () => {
	const { handlerActive, handlerSource } = useScreen()

	return (
		<Swiper
			loop
			slidesPerView={1}
			autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
			speed={800}
			className={styles.wrapp}
			modules={[Autoplay, Navigation, EffectCreative]}
			effect='creative'
			creativeEffect={{
				prev: {
					translate: [0, 0, -400],
				},
				next: {
					translate: ['100%', 0, 0],
				},
			}}
			navigation={{
				prevEl: '.prevBtn',
				nextEl: '.nextBtn',
			}}
		>
			{HERO_MOVIE_DATA.map((slide) => (
				<SwiperSlide key={slide.id} className={styles.slide}>
					<div className={styles.slide_image}>
						<img src={slide.overlay_poster} alt={slide.title} />
					</div>
					<div className={styles.slide_content}>
						<Button
							btnType='play'
							size='3xl'
							color='white'
							onClick={() => {
								handlerActive()
								handlerSource(
									slide.source ? slide.source : '',
									slide.overlay_poster ? slide.overlay_poster : ''
								)
							}}
						/>
						<div className={styles.slide_content__description}>
							<Titles size='2xl' className={styles.slide_content__title}>
								{slide.title} <Duration time={1.15} />
							</Titles>
							<div className={styles.slide_content__quote}>
								<span>{slide.subtitle}</span>
								<span>{slide.realeseData}</span>
							</div>
						</div>
						<div className={styles.slide_poster}>
							<img src={slide.poster} alt={slide.title} />
						</div>
					</div>
				</SwiperSlide>
			))}
			<div className={styles.slider_btn}>
				<button className='prevBtn'>
					<svg
						width='43'
						height='47'
						viewBox='0 0 43 47'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect
							x='42.5'
							y='46.5'
							width='42'
							height='46'
							transform='rotate(180 42.5 46.5)'
							stroke='white'
						/>
						<path d='M26.5 33L17.5 24L26.5 15' stroke='white' />
					</svg>
				</button>
				<button className='nextBtn'>
					<svg
						width='43'
						height='47'
						viewBox='0 0 43 47'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect x='0.5' y='0.5' width='42' height='46' stroke='white' />
						<path d='M16.5 14L25.5 23L16.5 32' stroke='white' />
					</svg>
				</button>
			</div>
		</Swiper>
	)
}
