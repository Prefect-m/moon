import { FC, PropsWithChildren, createContext, useState } from 'react'

export const NavigationContext = createContext({
	isOpen: false,
	handlerOpenClose: () => {},
})

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handlerOpenClose = () => {
		if (!isOpen) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}

	return (
		<NavigationContext.Provider value={{ isOpen, handlerOpenClose }}>
			{children}
		</NavigationContext.Provider>
	)
}
