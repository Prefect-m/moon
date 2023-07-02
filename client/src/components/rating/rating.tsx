import { FC } from 'react'
import { LiaImdb } from 'react-icons/lia'
import styles from './rating.module.scss'
import { IRatingProps } from './Rating.props'
import { Logo } from '../icons'
import classNames from 'classnames'

export const Rating: FC<IRatingProps> = ({ rating, size, ratingType }) => {
	return (
		<div
			className={classNames(styles.rating, {
				[styles.moon]: ratingType === 'moon',
			})}
		>
			{ratingType === 'moon' ? (
				<Logo width={54} height={12} />
			) : (
				<LiaImdb color='yellow' size={size} />
			)}
			<span>{rating}</span>
		</div>
	)
}
