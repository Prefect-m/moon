import { FC } from 'react'
import styles from './card.module.scss'
import { ICardProps } from './Card.props'
import { Titles, Button, Rating } from '@/components'
import { AiFillInfoCircle } from 'react-icons/ai'
import { useScreen } from '@/hooks'

export const MovieCard: FC<ICardProps> = ({
	data,
	sectionSubtitle,
	sectionTitle,
}) => {
	const { handlerActive, handlerSource } = useScreen()

	const LIMIT = 6
	return (
		<>
			<Titles size='1xl' className={styles.title} subtitle={sectionSubtitle}>
				{sectionTitle}
			</Titles>
			<div className={styles.cards}>
				{data.slice(0, LIMIT).map((movie) => (
					<div className={styles.card} key={movie.id}>
						<div className={styles.card_rating}>
							{movie.rating && <Rating rating={movie.rating} size={30} />}
						</div>
						<div
							className={styles.card_image}
							style={{ backgroundImage: `url(${movie.poster})` }}
						></div>
						<div className={styles.card_content}>
							<div className={styles.card_name}>
								<Titles size='4xl'>{movie.title}</Titles>
								<span>Жанр: {movie.jenre}</span>
							</div>
							<div className={styles.card_action}>
								<Button
									onClick={() => {
										handlerActive()
										handlerSource(
											movie.source ? movie.source : '',
											movie.overlay_poster ? movie.overlay_poster : ''
										)
									}}
									btnType='play-online'
									size='1xl'
									color='black'
								>
									смотреть онлайн
								</Button>
								<button>
									<AiFillInfoCircle />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
