'use client'

import { ReactNode, createContext, useState } from 'react'

export const PlayerContext = createContext({
	active: false,
	state: '',
	poster: '',
	activeHandler: (): void => {},
	closeHandler: () => {},
	stateHandler: (state: string, poster: string) => {},
})

type PlayerContextType = {
	children: ReactNode
}
export const PlayerContextProvider = ({ children }: PlayerContextType) => {
	const [active, setActive] = useState<boolean>(false)
	const [state, setState] = useState('')
	const [poster, setPoster] = useState('')

	const activeHandler = () => setActive(true)
	const stateHandler = (value: string, poster: string) => {
		setState(value)
		setPoster(poster)
	}
	const closeHandler = () => {
		setActive(false)
		setState('')
		setPoster('')
	}

	return (
		<PlayerContext.Provider
			value={{
				active,
				state,
				poster,
				activeHandler,
				closeHandler,
				stateHandler,
			}}
		>
			{children}
		</PlayerContext.Provider>
	)
}
