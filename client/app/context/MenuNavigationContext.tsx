'use client'

import { FC, PropsWithChildren, createContext, useState } from 'react'

export const MenuNavigationContext = createContext({
	isOpen: false,
	openCloseHandler: () => {},
})
export const MenuNavigationProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const openCloseHandler = () => {
		if (!isOpen) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}

	return (
		<MenuNavigationContext.Provider value={{ isOpen, openCloseHandler }}>
			{children}
		</MenuNavigationContext.Provider>
	)
}
