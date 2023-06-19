'use client'
import { ReactNode, useState, createContext } from 'react'

export const SignInContext = createContext({
	isOpen: false,
	handlerCloseOpen: () => {},
})
type SignInContextType = {
	children: ReactNode
}
export const SignInContextProvider = ({ children }: SignInContextType) => {
	const [isOpen, setIsOpen] = useState(false)
	const handlerCloseOpen = () => {
		if (!isOpen) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}

	return (
		<SignInContext.Provider value={{ isOpen, handlerCloseOpen }}>
			{children}
		</SignInContext.Provider>
	)
}
