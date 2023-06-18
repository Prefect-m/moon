import { FC } from 'react'
import styles from './NewMovie.module.scss'
import { RatingComponent } from '../../global/rating/Rating'
import { ButtonComponent } from '../../global/button/ButtonComponent'
import { TitleCompoent } from '../../global/title/Title'
import { TimeComponent } from '../../global/time/Time'
import { INewMovieProps } from './NewMovie.props'

export const NewMovieComponent: FC<INewMovieProps> = ({
	subtitle = 'Новинка набравшая наибольшее число просмотров',
	title = 'Новинка недели',
}) => {
	return (
		<>
			<TitleCompoent subtitle={subtitle}>{title}</TitleCompoent>
			<div className={styles.movie}>
				<div className={styles.movie_content}>
					<div className={styles.movie_image}>
						<div className={styles.movie_jenre}>
							<span>Жанр: Военный/Боевик</span>
							<TimeComponent time={'2 ч 28 мин'} />
						</div>
						<RatingComponent rating={8.5} />
						<img
							src='https://kinotv.ru/upload/delight.webpconverter/upload/setka-editor/6eb/t0qi1gmnqrxfasyb3xmk0tzl8y96c598.jpg.webp?1666620989366538'
							alt=''
						/>
					</div>
					<div className={styles.movie_content__description}>
						<span>Премия «Оскар» за лучший фильм</span>
						<TitleCompoent type='large-x'>
							На западном фронте без перемен
						</TitleCompoent>
						<ButtonComponent typeBtn='play-online' size='2xl' color='white' />
					</div>
				</div>
				<div className={styles.movie_trailer}>
					<img
						src='https://ichef.bbci.co.uk/news/640/cpsprodpb/BF77/production/_127351094_allquietonthewesternfront_reinerbajo_02small.jpg'
						alt=''
					/>
					<div className={styles.movie_trailer__btn}>
						<ButtonComponent typeBtn='play' size='3xl' color='white' />
						<time>1:32</time>
					</div>
				</div>
			</div>
		</>
	)
}
