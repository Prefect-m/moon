import { ILink } from '@/interface/link.interface'
import { DetailsHTMLAttributes } from 'react'

export interface IlistGroup extends DetailsHTMLAttributes<HTMLUListElement> {
	links: ILink[]
	itemClass: string
}
