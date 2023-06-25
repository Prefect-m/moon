import { IBase } from './base.interface'

export interface IMovie extends IBase {
	title: string
	subtitle?: string
	jenre: string
	rating: number
	poster: string
	overlay_poster?: string
	year?: number
}
