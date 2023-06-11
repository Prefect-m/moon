import { FC } from 'react'
import { ICONS_DATA } from './icons.data'

export const IconsComponent: FC = () => {
	return (
		<>
			{ICONS_DATA.map((icons, i) => (
				<link
					key={i}
					rel={icons.rel}
					href={icons.href}
					type={icons.type}
					sizes={icons.sizes}
				/>
			))}
		</>
	)
}
