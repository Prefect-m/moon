export interface IMovie {
	id: number
	title: string
	genre: string
	sesons?: string
	poster?: string
	overlayPoster?: string
	rating: number
	source?: string
	encyclopedic?: IMovieEncyclopedic[]
}
export interface IMovieEncyclopedic {
	id: number
	name: string
	value: string
}
