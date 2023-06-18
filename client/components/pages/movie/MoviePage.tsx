'use client'
import { FC } from 'react'
import styles from './MoviePage.module.scss'
import { TitleCompoent } from '@/components/global/title/Title'
import { ButtonComponent } from '@/components/global/button/ButtonComponent'
import { IMovie, IMovieEncyclopedic } from '@/app/interfaces/movie.interface'
import { MovieCardComponent } from '@/components/movie/movie-card/MovieCard'
import { NewMovieComponent } from '@/components/movie/new-movie/NewMovie'
import { ExtendSearchComponent } from '@/components/search/extend-search/ExtendSearch'

export const MoviePage: FC = () => {
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
	const enciclopedy: IMovieEncyclopedic[] = [
		{
			id: 1,
			name: 'Год производства',
			value: '2022 (1 сезон)',
		},
		{
			id: 2,
			name: 'Платформа',
			value: 'Disney+',
		},
		{
			id: 3,
			name: 'Страна',
			value: 'США',
		},
		{
			id: 4,
			name: 'Жанр',
			value: 'фантастика, боевик, приключения',
		},
		{
			id: 5,
			name: 'Режиссер',
			value: 'Дебора Чоу',
		},
		{
			id: 6,
			name: 'Сценарий',
			value: 'Джордж Лукас, Ханна Фридман, Джоби Харольд',
		},
		{
			id: 7,
			name: 'Продюсер',
			value: 'Кэндис Д. Кампос, Даг Чианг, Дебора Чоу',
		},
		{
			id: 8,
			name: 'Оператор',
			value: 'Чон Джон-хун',
		},
		{
			id: 9,
			name: 'Композитор',
			value: 'Натали Энн Холт',
		},
		{
			id: 10,
			name: 'Художник',
			value: 'Стив Кристенсен, Джозеф Хиура, Ребека Киллэм',
		},
		{
			id: 11,
			name: 'Монтаж',
			value: 'Николас Де То, Келли Диксон, Джош Эрл',
		},
		{
			id: 12,
			name: 'Премьера в мире',
			value: '27 мая 2022',
		},
		{
			id: 13,
			name: 'Цифровой релиз',
			value: '27 мая 2022, «Disney+»',
		},
	]
	const actors = [
		{
			id: 1,
			name: 'Юэн Макгрегор',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1687092654/moon/licensed-image_1_q4kch6.png',
		},
		{
			id: 2,
			name: 'Индира Варма',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1687092648/moon/licensed-image_4_1_eq2avi.png',
		},
		{
			id: 3,
			name: 'Вивьен Лира Блэр',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1687092672/moon/licensed-image_2_1_fgobaz.png',
		},
		{
			id: 4,
			name: 'Хейден Кристенсен',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1687092688/moon/licensed-image_3_1_dev2md.png',
		},
		{
			id: 5,
			name: 'Моусес Ингрэм',
			image:
				'https://res.cloudinary.com/djzubalr7/image/upload/v1687092691/moon/licensed-image_1_1_yattxu.png',
		},
	]
	return (
		<>
			<div
				className={styles.movie}
				style={{
					backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687065579/moon/Obi-Wan-Kenobi-2022_1_yohxpo.jpg)`,
				}}
			>
				<div className={styles.movie_wrap}>
					<div className={styles.movie_content}>
						<div className={styles.movie_content__description}>
							<div className={styles.movie_name}>
								<TitleCompoent type='large'>Оби-Ван Кеноби</TitleCompoent>
								<span>(мини–сериал 2022)</span>
							</div>
							<div className={styles.movie_buttons}>
								<ButtonComponent size='2xl' typeBtn='background'>
									Смотреть
								</ButtonComponent>
								<ButtonComponent size='2xl' typeBtn='background'>
									Трейлер
								</ButtonComponent>
							</div>
						</div>
						<div className={styles.movie_action}>
							<div className={styles.movie_action__btn}>
								<button>
									<svg
										width='11'
										height='12'
										viewBox='0 0 11 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M10.4577 6.7485H6.20768V11.2485H4.79102V6.7485H0.541016V5.2485H4.79102V0.748505H6.20768V5.2485H10.4577V6.7485Z'
											fill='white'
										/>
									</svg>
								</button>
								<span>Добавить в мою коллекцию</span>
							</div>
							<div className={styles.movie_action__btn}>
								<button>
									<svg
										width='15'
										height='12'
										viewBox='0 0 15 12'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M2.99222 10.773C2.40024 10.1462 1.93065 9.40207 1.61028 8.58312C1.2899 7.76417 1.125 6.88642 1.125 5.99999C1.125 5.11356 1.2899 4.23581 1.61028 3.41686C1.93065 2.5979 2.40024 1.85379 2.99222 1.22699M12.0079 1.22699C12.5999 1.85379 13.0695 2.5979 13.3898 3.41686C13.7102 4.23581 13.8751 5.11356 13.8751 5.99999C13.8751 6.88642 13.7102 7.76417 13.3898 8.58312C13.0695 9.40207 12.5999 10.1462 12.0079 10.773M4.99539 8.65124C4.33143 7.94801 3.95844 6.99436 3.95844 5.99999C3.95844 5.00562 4.33143 4.05197 4.99539 3.34874M10.0047 3.34874C10.6687 4.05197 11.0417 5.00562 11.0417 5.99999C11.0417 6.99436 10.6687 7.94801 10.0047 8.65124M8.20839 5.99999C8.20839 6.1989 8.13376 6.38967 8.00092 6.53032C7.86808 6.67097 7.68792 6.74999 7.50006 6.74999C7.31219 6.74999 7.13203 6.67097 6.99919 6.53032C6.86635 6.38967 6.79172 6.1989 6.79172 5.99999C6.79172 5.80108 6.86635 5.61031 6.99919 5.46966C7.13203 5.32901 7.31219 5.24999 7.50006 5.24999C7.68792 5.24999 7.86808 5.32901 8.00092 5.46966C8.13376 5.61031 8.20839 5.80108 8.20839 5.99999Z'
											stroke='white'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</button>
								<span>Продвигать в очереди на эфир</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className='container'>
				<div className={styles.description}>
					<div className={styles.description_wrap}>
						<div className={styles.description_enciclopedy}>
							{enciclopedy.map(item => (
								<div
									className={styles.description_enciclopedy__item}
									key={item.id}
								>
									<span>{item.name}:</span>
									<div className={styles.description_enciclopedy__title}>
										{item.value}
									</div>
								</div>
							))}
						</div>
						<div className={styles.actors}>
							{actors.map(actor => (
								<div className={styles.actors_item} key={actor.id}>
									<div className={styles.actors_image}>
										<img src={actor.image} alt={actor.name} />
									</div>
									<div className={styles.actors_name}>{actor.name}</div>
								</div>
							))}
							<button className={styles.actors_more} disabled>
								Показать еще
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className='container'>
				<MovieCardComponent
					title='Рекомендуем'
					subtitle='Фильмы и сериалы по рекомендации'
					items={movies}
				/>
			</section>
			<section className='container'>
				<NewMovieComponent />
			</section>
			<section className='container'>
				<ExtendSearchComponent />
			</section>
		</>
	)
}
