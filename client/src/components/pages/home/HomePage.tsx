import { Layout } from '@/components/layout/Layout'
import { FC } from 'react'
import { Button, HeroSlider, MovieCard, NewMovie, Titles } from '@/components'
import styles from './home.module.scss'
import { CardMovies, HeroMovie } from './placeholder.data'

export const HomePage: FC = () => {
	return (
		<Layout title='Главная'>
			<div className='container'>
				<div className={styles.hero}>
					<div className={styles.hero_slide}>
						<HeroSlider />
					</div>
					<div className={styles.hero_popular}>
						{HeroMovie.map((movie) => (
							<div className={styles.movie} key={movie.id}>
								<div
									className={styles.movie_image}
									style={{ backgroundImage: `url(${movie.poster})` }}
								></div>
								<div className={styles.movie_content}>
									<Button btnType='play' size='2xl' color='black' />
									<div className={styles.movie_name}>
										<Titles size='3xl'>{movie.title}</Titles>
										<div className={styles.movie_quote}>
											<span>{movie.jenre}</span>
											<span>{movie.year}</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<section className='container'>
				<MovieCard
					data={CardMovies}
					sectionSubtitle='Самые популярные, на основе просмотров'
					sectionTitle='Популярные'
				/>
			</section>
			<section className='container'>
				<Titles
					size='1xl'
					subtitle='Смотрите вместе с другими пользователями в формате онлайн'
				>
					Онлайн кинотеатр
				</Titles>
				<div className={styles.online}>
					<div
						className={styles.online_poster}
						style={{
							backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687683923/moon/Group_237_xe9z86.png)`,
						}}
					></div>
					<div className={styles.online_panel}>
						<div className={styles.online_quote}>
							<span>Сейчас идет:</span>
							<Titles size='4xl' className={styles.online_quote__name}>
								Американский психопат
								<span>Ужасы/Триллер - 2000 г.</span>
							</Titles>
						</div>
						<Button btnType='play' color='purple' size='4xl' />
					</div>
					<div className={styles.online_chat}>
						<div className={styles.online_views}>
							Зрителей: <span>254</span>
						</div>
						<div className={styles.online_chat__content}>
							<div className={styles.online_profile}>
								<div
									className={styles.online_profile__image}
									style={{
										backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687092691/moon/licensed-image_1_1_yattxu.png)`,
									}}
								></div>
								<div className={styles.online_message}>
									<span>Alana</span>
									<span>toh hum to girl hai vesahi bat karegi na</span>
								</div>
							</div>
							<div className={styles.online_profile}>
								<div
									className={styles.online_profile__image}
									style={{
										backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687361626/moon/istockphoto-1319763895-612x612_1_mgpwof.png)`,
									}}
								></div>
								<div className={styles.online_message}>
									<span>James</span>
									<span>Dubai ka gurudev</span>
								</div>
							</div>
							<div className={styles.online_profile}>
								<div
									className={styles.online_profile__image}
									style={{
										backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687092654/moon/licensed-image_1_q4kch6.png)`,
									}}
								></div>
								<div className={styles.online_message}>
									<span>Bobbi</span>
									<span>without uuuuuuuuuuuu &#128513; &#129315;</span>
								</div>
							</div>
							<div className={styles.online_profile}>
								<div
									className={styles.online_profile__image}
									style={{
										backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1687092672/moon/licensed-image_2_1_fgobaz.png)`,
									}}
								></div>
								<div className={styles.online_message}>
									<span>Emma</span>
									<span>thik hai but it's your rights &#9996;</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='container'>
				<Titles
					size='1xl'
					subtitle='Новинка набравшая наибольшее число просмотров'
				>
					Новинка недели
				</Titles>
				<NewMovie />
			</section>
		</Layout>
	)
}
