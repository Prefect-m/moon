'use client'

import { ReactNode, createContext, useState } from 'react'

export const PlayerContext = createContext({
	active: false,
	state: '',
	activeHandler: (): void => {},
	closeHandler: () => {},
	stateHandler: (value: string) => {},
})

type PlayerContextType = {
	children: ReactNode
}
export const PlayerContextProvider = ({ children }: PlayerContextType) => {
	const [active, setActive] = useState<boolean>(false)
	const [state, setState] = useState('')

	const activeHandler = () => setActive(true)
	const stateHandler = (value: string) => setState(value)
	const closeHandler = () => {
		setActive(false)
		setState('')
	}

	return (
		<PlayerContext.Provider
			value={{ active, state, activeHandler, closeHandler, stateHandler }}
		>
			{children}
		</PlayerContext.Provider>
	)
}
