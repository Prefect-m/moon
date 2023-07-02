export interface IPlayerProps {
	src: string
	muted?: boolean
	autoPlay?: boolean
	poster?: string
	movieName?: string
	controls?: boolean
	loop?: boolean
	full?: boolean
	screenHandler?: (value: boolean) => void
}
