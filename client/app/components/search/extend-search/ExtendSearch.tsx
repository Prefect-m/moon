'use client'
import { FC } from 'react'
import styles from './ExtendSearch.module.scss'
import { TitleCompoent } from '../../global/title/Title'
import { MovieSearchSlider } from '@/components'
import { IMovie } from '@/app/interfaces/movie.interface'

export const ExtendSearchComponent = () => {
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
			overlayPoster:
				'https://cdn.kanobu.ru/articles/pics/03377c35-500c-4b3d-a7b1-4a4d235934cc.webp',
		},
		{
			id: 2,
			title: 'Властелин колец: Кольца власти',
			poster:
				'https://kinogo.media/uploads/posts/2022-08/1661502049-239734267.jpg',
			genre: 'Телесериал/Драма',
			rating: 5.3,
			sesons: '2 - сезон',
			overlayPoster:
				'https://www.soyuz.ru/public/uploads/files/5/7483545/1005x558_202206211740562fbc441792.jpg',
			source:
				'https://res.cloudinary.com/djzubalr7/video/upload/v1686934650/moon/%D0%92%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D0%B8%D0%BD_%D0%BA%D0%BE%D0%BB%D0%B5%D1%86__%D0%9A%D0%BE%D0%BB%D1%8C%D1%86%D0%B0_%D0%92%D0%BB%D0%B0%D1%81%D1%82%D0%B8_%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9_%D1%82%D1%80%D0%B5%D0%B9%D0%BB%D0%B5%D1%80_2_%D0%A1%D0%B5%D1%80%D0%B8%D0%B0%D0%BB_2022_Amazon_tnmmgf.mp4',
		},
		{
			id: 3,
			title: 'Аватар: Путь воды',
			poster:
				'https://www.ostmusic.org/images/albums/avatar_the_way_of_water.jpg',
			genre: 'Научная фантастика/Боевик',
			rating: 8.5,
			sesons: '2 - часть',
			overlayPoster:
				'https://cdn.iz.ru/sites/default/files/article-2022-12/3_1_0.jpg',
		},
		{
			id: 4,
			title: 'Джон Уик 4',
			poster:
				'https://upload.wikimedia.org/wikipedia/ru/3/3b/John_Wick_4_poster.jpg',
			genre: 'Боевик/Неонуар',
			rating: 8.1,
			sesons: '4 - часть',
			overlayPoster:
				'https://www.soyuz.ru/public/uploads/files/5/7622098/1005x558_2023032413180601e903e64a.jpg',
		},
		{
			id: 5,
			title: 'Джордж Форман: несокрушимый',
			poster:
				'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/38dd03bc-a79d-4f82-a922-13b9c7ac06a8/220x330',
			genre: 'Драма/Биография',
			rating: 6.8,
			overlayPoster:
				'https://mma.metaratings.ru/storage/images/87/ce/87cee748ff6503f09082f26b6c5842b3.jpg',
		},
		{
			id: 6,
			title: 'Отзвуки прошлого',
			poster:
				'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf197df2-d1ee-4121-a413-f7eebb78a1e9/220x330',
			genre: 'Боевик/Драма',
			rating: 6.2,
			overlayPoster:
				'https://in-rating.ru/space/wp-content/uploads/2022/12/%D0%AD%D0%BF%D0%B8%D0%B7%D0%BE%D0%B4-01.00_01_13_07.Still166-1200.jpg',
		},
	]
	return (
		<>
			<TitleCompoent subtitle='Выберите опции для расширенного поиска'>
				Расширенный поиск
			</TitleCompoent>
			<div className={styles.search}>
				<div className={styles.search_wrap}>
					<div className={styles.search_options}>
						<div className={styles.search_options__item}>
							<span>Выберите жанр</span>
							<select name='jenre'>
								<option value='боевик'>боевик</option>
							</select>
						</div>
						<div className={styles.search_options__item}>
							<span>выберите год</span>
							<select name='jenre'>
								<option value='2023'>2023</option>
								<option value='2023'>2022</option>
								<option value='2023'>2020</option>
								<option value='2023'>2019</option>
							</select>
						</div>
						<div className={styles.search_options__item}>
							<span>выберите качество видео</span>
							<select name='jenre'>
								<option value='360p'>360p</option>
								<option value='440p'>440p</option>
								<option value='720p'>720p</option>
								<option value='1080p'>1080p</option>
							</select>
						</div>
					</div>
					<MovieSearchSlider movies={movies} />
				</div>
			</div>
		</>
	)
}
