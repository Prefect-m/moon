import { FC } from 'react'
import { ITimeProps } from './Time.props'

export const TimeComponent: FC<ITimeProps> = ({ time }) => {
	return <time>{time}</time>
}
