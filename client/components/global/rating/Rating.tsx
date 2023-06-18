import { FC } from 'react'
import styles from './Rating.module.scss'
import { IRating } from './Rating.props'
import classNames from 'classnames'

export const RatingComponent: FC<IRating> = ({ rating, className }) => {
	return (
		<div className={classNames(styles.rating, className)}>
			<img src='/icons/IMDB_Logo_2016 1.png' alt='IMDB' />
			<span>{rating}</span>
		</div>
	)
}
