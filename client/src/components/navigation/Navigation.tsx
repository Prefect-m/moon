import { FC } from 'react'
import styles from './navigation.module.scss'
import { Titles, Listgroup } from '@/components'
import { MdLocalMovies } from 'react-icons/md'
import { RiGooglePlayFill } from 'react-icons/ri'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigation } from '@/hooks/navigation'
import { movieMenu, navMenu, tvSeriesMenu } from './placeholder.data'

export const Navigation: FC = () => {
	const { isOpen } = useNavigation()
	const transition = { duration: 0.4, delay: 0.2 }
	const itemTr = {
		exit: {
			opacity: 0,
			y: '-100%',
			transition: {
				ease: 'easeInOut',
				duration: 0.4,
				delay: 0.5,
			},
		},
	}
	return (
		<AnimatePresence mode='wait'>
			{isOpen && (
				<div className={styles.navigation}>
					<motion.div
						variants={itemTr}
						initial={{ y: '-100%', opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.3 }}
						className={styles.navigation_overlay}
						exit='exit'
					></motion.div>
					<div className={styles.navigation_wrap}>
						<motion.div
							className={styles.menu}
							initial={{ x: '-50px', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.4 }}
							exit={{
								opacity: 0,
								x: '-50px',
								transition: {
									ease: 'easeInOut',
									duration: 0.2,
									delay: 0.3,
								},
							}}
						>
							<Titles size='3xl' className={styles.menu_title}>
								<MdLocalMovies />
								<span>Категории фильмов</span>
							</Titles>
							<Listgroup
								className={styles.menu_list}
								links={movieMenu}
								itemClass={styles.menu_list__item}
							/>
						</motion.div>
						<motion.div
							className={styles.menu}
							initial={{ x: '50px', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.4 }}
							exit={{
								opacity: 0,
								x: '50px',
								transition: {
									ease: 'easeInOut',
									duration: 0.2,
									delay: 0.3,
								},
							}}
						>
							<Titles size='3xl' className={styles.menu_title}>
								<RiGooglePlayFill />
								<span>Категории сериалов</span>
							</Titles>
							<Listgroup
								className={styles.menu_list}
								links={tvSeriesMenu}
								itemClass={styles.menu_list__item}
							/>
						</motion.div>
					</div>
					<motion.div
						className={styles.nav}
						initial={{ y: '150px', opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5 }}
						exit={{
							opacity: 0,
							y: '150px',
							transition: {
								ease: 'easeInOut',
								duration: 0.2,
								delay: 0.3,
							},
						}}
					>
						<Listgroup
							className={styles.nav_list}
							links={navMenu}
							itemClass={styles.nav_list__item}
						/>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	)
}
