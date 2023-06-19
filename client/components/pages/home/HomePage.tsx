'use client'
import { FC } from 'react'
import styles from './HomePage.module.scss'
import { IMovie } from '@/app/interfaces/movie.interface'
import { usePlayerContext } from '@/app/hooks'
import {
	ButtonComponent,
	MovieCardComponent,
	NewMovieComponent,
	TitleCompoent,
	HeroSlider,
	ExtendSearchComponent,
} from '@/components'

export const HomePage: FC = () => {
	const { activeHandler } = usePlayerContext()
	const movies: IMovie[] = [
		{
			id: 1,
			title: 'Оби-Ван Кеноби',
			poster:
				'https://focus.ua/static/storage/originals/1/7e/e5f8af33395094639e377f1e629fc7e1.jpg',
			genre: 'Телесериал/Драма',
			rating: 7.3,
			sesons: '1 - сезон',
			source: '/video/obivan.mp4',
		},
		{
			id: 2,
			title: 'Властелин колец: Кольца власти',
			poster:
				'https://kinogo.media/uploads/posts/2022-08/1661502049-239734267.jpg',
			genre: 'Телесериал/Драма',
			rating: 5.3,
			sesons: '2 - сезон',
		},
		{
			id: 3,
			title: 'Аватар: Путь воды',
			poster:
				'https://www.ostmusic.org/images/albums/avatar_the_way_of_water.jpg',
			genre: 'Научная фантастика/Боевик',
			rating: 8.5,
			sesons: '2 - часть',
		},
		{
			id: 4,
			title: 'Джон Уик 4',
			poster:
				'https://upload.wikimedia.org/wikipedia/ru/3/3b/John_Wick_4_poster.jpg',
			genre: 'Боевик/Неонуар',
			rating: 8.1,
			sesons: '4 - часть',
		},
		{
			id: 5,
			title: 'Джордж Форман: несокрушимый',
			poster:
				'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/38dd03bc-a79d-4f82-a922-13b9c7ac06a8/220x330',
			genre: 'Драма/Биография',
			rating: 6.8,
		},
		{
			id: 6,
			title: 'Отзвуки прошлого',
			poster:
				'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf197df2-d1ee-4121-a413-f7eebb78a1e9/220x330',
			genre: 'Боевик/Драма',
			rating: 6.2,
		},
	]
	return (
		<>
			<section className={styles.hero}>
				<HeroSlider />
				<div className={styles.slider}>
					<div className={styles.slider_slide}>
						<div className={styles.slider_slide_image}>
							<img
								src='https://static.hdrezka.ac/i/2023/4/21/c959bbd78eddabp21h59s.png'
								alt=''
							/>
						</div>
						<div className={styles.slider_content}>
							<ButtonComponent typeBtn='play' color='black' size='2xl' />
							<div className={styles.slider_content__description}>
								<h4>Асока</h4>
								<span>Телесериал/Приключения</span>
								<span>2022 г.</span>
							</div>
						</div>
					</div>
					<div className={styles.slider_slide}>
						<div className={styles.slider_slide_image}>
							<img
								src=' https://upload.wikimedia.org/wikipedia/ru/e/eb/Star_Wars_%E2%80%94_The_Rise_of_Skywalker_%28poster%29.jpg'
								alt=''
							/>
						</div>
						<div className={styles.slider_content}>
							<ButtonComponent typeBtn='play' color='black' size='2xl' />
							<div className={styles.slider_content__description}>
								<h4>Звёздные войны: Скайуокер. Восход</h4>
								<span>Экшн</span>
								<span>1 сезон</span>
								<span>2021 г.</span>
							</div>
						</div>
					</div>
					<div className={styles.slider_slide}>
						<div className={styles.slider_slide_image}>
							<img
								src='data:image/jpeg;base64,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'
								alt=''
							/>
						</div>
						<div className={styles.slider_content}>
							<ButtonComponent typeBtn='play' color='black' size='2xl' />
							<div className={styles.slider_content__description}>
								<h4>Книга Бобы Фетта</h4>
								<span>Экшн</span>
								<span>1 сезон</span>
								<span>2021 г.</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='container'>
				<MovieCardComponent
					items={movies}
					subtitle='Самые популярные, на основе просмотров'
					title='Популярные'
				/>
			</section>
			<section className='container'>
				<div className={styles.cinema}>
					<TitleCompoent subtitle='Смотрите вместе с другими пользователями в формате онлайн'>
						Онлайн кинотеатр
					</TitleCompoent>
					<div className={styles.cinema_wrapp}>
						<div className={styles.cinema_poster}>
							<img
								src='https://img3.goodfon.ru/original/2560x1440/3/21/amerikanskiy-psihopat-5728.jpg'
								alt='poster'
							/>
						</div>
						<div className={styles.cinema_description}>
							<span>Сейчас идет:</span>
							<TitleCompoent
								className={styles.cinema_description__title}
								type='small'
							>
								Американский психопат{' '}
								<span>
									Ужасы/Триллер - <sub>2000</sub> г.
								</span>
							</TitleCompoent>
						</div>
						{/* Absolute postion */}
						<div className={styles.cinema_player}>
							<video
								src='/video/Dune_ Part Two _ Official Trailer.mp4'
								controls
							></video>
						</div>
						<div className={styles.cinema_actions}>
							<ButtonComponent size='4xl' typeBtn='play' color='purple' />
							<ButtonComponent
								size='4xl'
								typeBtn='background'
								onClick={() => activeHandler()}
							>
								Присоединиться
							</ButtonComponent>
						</div>
					</div>
				</div>
			</section>
			<section className='container'>
				<NewMovieComponent />
			</section>
			<section className='container'>
				<ExtendSearchComponent />
			</section>
			<section className='container'>
				<MovieCardComponent
					items={movies}
					subtitle='Вы можете зарегистрироваться и собирать свою коллекцию, и возможно она появится здесь'
					title='Избранные'
				/>
			</section>
		</>
	)
}
