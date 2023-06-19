'use client'
import { FC } from 'react'
import { ButtonComponent, TitleCompoent } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, EffectCreative } from 'swiper'
import styles from './Hero-slider.module.scss'
import 'swiper/css'

export const HeroSlider: FC = () => {
	const HERO_SLIDER_DATA = [
		{
			id: 1,
			image:
				'https://tech.liga.net/images/general/2023/05/04/20230504181123-4576.jpg?v=1683213083',
			poster: 'https://static.hdrezka.ac/i/2023/5/4/b380edb6a8525ym72t55k.png',
			title: 'Дюна 2',
			subtitle: 'Официальный трейлер к фильму «Дюна: Часть вторая»',
			time: '1:15',
			realeseData: '3 ноября 2023 г.',
		},
		{
			id: 2,
			image:
				'https://thumbs.dfs.ivi.ru/storage9/contents/8/c/727f49538f21eeff8bd368d79fb803.jpg/858x483/?q=60',
			poster:
				'https://st.kinobase.org/storage/360x534/posters/2020/02/63911636aaa22abaa0e0.jpg',
			title: 'Бегущий по лезвию 2049',
			subtitle: 'Официальный трейлер к фильму «Бегущий по лезвию 2049»',
			time: '1:23',
			realeseData: '3 ноября 2023 г.',
		},
	]

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
					// will set `translateZ(-400px)` on previous slides
					translate: [0, 0, -400],
				},
				next: {
					// will set `translateX(100%)` on next slides
					translate: ['100%', 0, 0],
				},
			}}
			navigation={{
				prevEl: '.prevBtn',
				nextEl: '.nextBtn',
			}}
		>
			{HERO_SLIDER_DATA.map(slide => (
				<SwiperSlide key={slide.id} className={styles.slide}>
					<div className={styles.slide_image}>
						<img src={slide.image} alt={slide.title} />
					</div>
					<div className={styles.slide_content}>
						<ButtonComponent size='4xl' typeBtn='play' color='white' />
						<div className={styles.slide_content__description}>
							<TitleCompoent
								className={styles.slide_content__title}
								type='large-x'
							>
								{slide.title}
								<sup>{slide.time}</sup>
							</TitleCompoent>
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
