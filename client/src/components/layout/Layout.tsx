import { FC } from 'react'
import { Navbar } from '@/components'
import { Raleway } from 'next/font/google'
import Head from 'next/head'
import { LayoutProps } from './Layout.props'

const raleway = Raleway({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
})

export const Layout: FC<LayoutProps> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{`${title} | Moon online cinema`}</title>
			</Head>
			<main className={raleway.className}>
				<Navbar />
				{children}
			</main>
		</>
	)
}
