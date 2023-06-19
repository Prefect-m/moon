import { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import {
	FooterComponent,
	IconsComponent,
	MenuNavigation,
	LoginRegisterScreen,
	NavbarComponent,
	PlayPanelComponent,
} from '@/components'
import { PlayerContextProvider } from './context/Player.context'
import '../styles/globals.scss'
import { MenuNavigationProvider } from './context/MenuNavigationContext'
import { SignInContextProvider } from './context/SignInContext'
const raleway = Raleway({
	weight: ['300', '400', '700'],
	style: ['normal'],
	subsets: ['latin-ext'],
})

export const metadata: Metadata = {
	title: {
		default: 'Moon Cinema Online',
		template: '%s | Moon Cinema Online',
	},
	description:
		'Moon Cinema Online. Смотрите фильмы и сериалы в формате онлайн. Онлайн кинотеатр нового поколения в Кыргызстане!',
	openGraph: {
		title: 'Moon Cinema Online',
		description:
			'Moon Cinema Online. Смотрите фильмы и сериалы в высоком качестве в формате онлайн!',
	},
}
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			{/* SEO */}
			<IconsComponent />
			<body className={raleway.className}>
				<MenuNavigationProvider>
					<SignInContextProvider>
						<LoginRegisterScreen />
						{/* Menu Navigation */}
						<MenuNavigation />
						<NavbarComponent />
						<PlayerContextProvider>
							<PlayPanelComponent />
							{children}
						</PlayerContextProvider>
						<FooterComponent />
					</SignInContextProvider>
				</MenuNavigationProvider>
			</body>
		</html>
	)
}
