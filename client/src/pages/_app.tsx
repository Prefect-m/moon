import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import '@/styles/globals.scss'
import { NavigationProvider } from '@/context/Navigation.context'
import { PlayerProvider } from '@/context/Player.context'

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<AnimatePresence initial={false} mode='wait'>
			<PlayerProvider>
				<NavigationProvider>
					<Component {...pageProps} key={router.asPath} />
				</NavigationProvider>
			</PlayerProvider>
		</AnimatePresence>
	)
}
