import React, { FC } from 'react'
import styles from './time-elapsed.module.scss'
import { ITimeProps } from './TimeElapsed.props'

export const TimeElapsed: FC<ITimeProps> = ({ elapsedSec, totalSec }) => {
	const elapsedMinute = Math.floor(elapsedSec / 60)
	const elapsedSecond = Math.floor(elapsedSec % 60)
	const totalMinute = Math.floor(totalSec / 60)
	const totalSecond = Math.floor(totalSec % 60)
	return (
		<div className={styles.time}>
			<div>
				{elapsedMinute}:{elapsedSecond.toString().padStart(2, '0')} -
			</div>
			<div>
				{totalMinute}:{totalSecond}
			</div>
		</div>
	)
}
