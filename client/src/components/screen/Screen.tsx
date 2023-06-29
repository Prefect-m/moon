import { useScreen } from '@/hooks'
import { FC } from 'react'
import styles from './screen.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '../icons'
import { Button, Player } from '@/components'

export const Screen: FC = () => {
	const { isActive, handlerClearClose, source, poster } = useScreen()
	return (
		<div className={styles.screen}>
			<AnimatePresence mode='wait'>
				{isActive && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, delay: 0.4 }}
						exit={{
							opacity: 0,
							transition: {
								ease: 'easeInOut',
								duration: 0.2,
								delay: 0.3,
							},
						}}
						className={styles.screen_wrap}
					>
						<div className={styles.screen_content}>
							<motion.div
								initial={{ y: '-50px', opacity: 0 }}
								animate={{ y: '0', opacity: 1 }}
								exit={{ y: '-50px', opacity: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className={styles.screen_top}
							>
								<Logo />
								<Button
									btnType='close'
									size='1xl'
									onClick={handlerClearClose}
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: '100px' }}
								animate={{ opacity: 1, y: '0' }}
								exit={{ y: '100px', opacity: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className={styles.screen_player}
							>
								<Player src={source} autoPlay poster={poster} />
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
