'use-client'
import { FC } from 'react'
import styles from './MovieCard.module.scss'
import { IMovieCardProps } from './MovieCard.props'
import { TitleCompoent } from '../../global/title/Title'
import { ButtonComponent } from '../../global/button/ButtonComponent'
import { usePlayerContext } from '@/app/hooks'
import { RatingComponent } from '../../global/rating/Rating'

export const MovieCardComponent: FC<IMovieCardProps> = ({
	items,
	subtitle,
	title,
}) => {
	const { activeHandler, stateHandler } = usePlayerContext()
	return (
		<>
			<TitleCompoent subtitle={subtitle}>{title}</TitleCompoent>
			<div className={styles.movies}>
				{items.map(item => (
					<div className={styles.movies_card} key={item.id}>
						<a href='#' className={styles.movies_card__image}>
							<RatingComponent rating={item.rating} />
							<img src={item.poster} alt={item.title} />
						</a>
						<div className={styles.movies_card__content}>
							<TitleCompoent
								className={styles.movies_card__title}
								type='medium'
							>
								{item.title}
							</TitleCompoent>
							<span>Жанр: {item.genre}</span>
							<span>{item.sesons}</span>
						</div>
						<div className={styles.movies_card_actions}>
							<ButtonComponent
								typeBtn='play-online'
								color='black'
								size='1xl'
								onClick={() => {
									activeHandler()
									stateHandler(
										item.source ? item.source : '',
										item?.poster ? item?.poster : ''
									)
								}}
							/>
							<button className={styles.movies_card__notify}>
								<svg
									width='13'
									height='13'
									viewBox='0 0 13 13'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M6.25 0C2.80058 0 0 2.90666 0 6.48674C0 10.0668 2.80058 12.9735 6.25 12.9735C9.69942 12.9735 12.5 10.0668 12.5 6.48674C12.5 2.90666 9.69942 0 6.25 0ZM6.25 5.27991C6.0186 5.27991 5.79709 5.37525 5.63314 5.54481C5.46977 5.71497 5.37791 5.94487 5.37791 6.18503C5.37791 7.32429 5.37791 8.968 5.37791 10.1073C5.37791 10.3474 5.46977 10.5773 5.63314 10.7475C5.79709 10.917 6.0186 11.0124 6.25 11.0124C6.4814 11.0124 6.70291 10.917 6.86686 10.7475C7.03023 10.5773 7.12209 10.3474 7.12209 10.1073C7.12209 8.968 7.12209 7.32429 7.12209 6.18503C7.12209 5.94487 7.03023 5.71497 6.86686 5.54481C6.70291 5.37525 6.4814 5.27991 6.25 5.27991ZM6.25 1.81025C6.81163 1.81025 7.26744 2.28333 7.26744 2.86624C7.26744 3.44914 6.81163 3.92222 6.25 3.92222C5.68837 3.92222 5.23256 3.44914 5.23256 2.86624C5.23256 2.28333 5.68837 1.81025 6.25 1.81025Z'
										fill='black'
									/>
								</svg>
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
