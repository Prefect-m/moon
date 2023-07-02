import { FC } from 'react'

export const Logo: FC<{ width?: number; height?: number }> = ({
	width = 121,
	height = 28,
}): JSX.Element => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 121 28'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='45.7674'
				cy='13.644'
				r='10.7986'
				stroke='white'
				strokeWidth='5'
			/>
			<circle
				cx='78.5828'
				cy='13.644'
				r='10.7986'
				stroke='white'
				strokeWidth='5'
			/>
			<path
				d='M81.959 13.287C82.6257 13.6719 82.6257 14.6342 81.959 15.0191L77.4231 17.6378C76.7564 18.0227 75.9231 17.5416 75.9231 16.7718L75.9231 11.5342C75.9231 10.7644 76.7564 10.2833 77.4231 10.6682L81.959 13.287Z'
				fill='white'
			/>
			<path
				d='M0 26.8045V0.345417H0.0345416L12.9186 18.618L26.1136 0.345417H26.1827V26.8045H21.1741V14.6803L12.8841 26.459H12.815L4.83586 15.4402V26.8045H0Z'
				fill='white'
			/>
			<path
				d='M120.862 27.4608L103.073 11.3988L103.176 26.4245H98.0986V0H98.3059L116.06 16.3037L115.957 1.00171H121V27.4608H120.862Z'
				fill='white'
			/>
		</svg>
	)
}
