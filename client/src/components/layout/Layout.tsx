import { FC, useEffect } from 'react'
import { EndSection, Navbar, Navigation } from '@/components'
import { Raleway } from 'next/font/google'
import Head from 'next/head'
import { LayoutProps } from './Layout.props'
import { useNavigation } from '@/hooks/navigation'

const raleway = Raleway({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
})

export const Layout: FC<LayoutProps> = ({ children, title }) => {
	const { isOpen } = useNavigation()
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('block')
		} else {
			document.body.classList.remove('block')
			document.body.removeAttribute('class')
		}
	}, [isOpen])
	return (
		<>
			<Head>
				<title>{`${title} | Moon online cinema`}</title>
			</Head>
			<main className={raleway.className}>
				<Navigation />
				<Navbar />
				{children}
				<EndSection />
			</main>
		</>
	)
}
