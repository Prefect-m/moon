import { FC } from 'react'
import { IlistGroup } from './List-group.props'
import Link from 'next/link'

export const Listgroup: FC<IlistGroup> = ({
	links,
	className,
	itemClass,
	...props
}) => {
	return (
		<ul className={className} {...props}>
			{links.map((link) => (
				<li key={link.id} className={itemClass}>
					<Link href={link.href}>{link.linkName}</Link>
				</li>
			))}
		</ul>
	)
}
