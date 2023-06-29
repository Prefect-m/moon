import { FC, PropsWithChildren, createContext, useState } from 'react'

export const PlayerContext = createContext({
	isActive: false,
	source: '',
	poster: '',
	handlerActive: () => {},
	handlerSource: (value: string, poster: string) => {},
	handlerClearClose: () => {},
})

export const PlayerProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isActive, setIsActive] = useState(false)
	const [source, setSource] = useState('')
	const [poster, setPoster] = useState('')

	const handlerActive = () => setIsActive(true)

	const handlerSource = (value: string, poster: string) => {
		setSource(value)
		setPoster(poster)
	}

	const handlerClearClose = () => {
		setSource('')
		setIsActive(false)
	}

	return (
		<PlayerContext.Provider
			value={{
				isActive,
				source,
				poster,
				handlerActive,
				handlerClearClose,
				handlerSource,
			}}
		>
			{children}
		</PlayerContext.Provider>
	)
}
