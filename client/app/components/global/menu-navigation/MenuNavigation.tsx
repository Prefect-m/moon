'use client'
import { FC } from 'react'
import styles from './MenuNavigation.module.scss'
import { useMenuNavigationContext } from '@/app/hooks'
import classNames from 'classnames'

export const MenuNavigation: FC = () => {
	const { isOpen } = useMenuNavigationContext()
	return (
		<div
			className={classNames(styles.navigation, {
				[styles.active]: isOpen,
			})}
		>
			<div className={styles.navigation_wrap}>
				<nav className={styles.nav}>
					<ul className={styles.nav_list}>
						<li className={styles.nav_list__item}>
							<a href='#'>HOME</a>
						</li>
						{/* <li className={styles.nav_list__item}>
							<a href='#'>PROFILE</a>
						</li> */}
					</ul>
				</nav>
				<div className={styles.wrap}>
					<ul className={styles.menu}>
						<li className={styles.menu_item}>
							<span>
								<svg
									width='16'
									height='18'
									viewBox='0 0 16 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M14 1V2H12V1C12 0.45 11.55 0 11 0H5C4.45 0 4 0.45 4 1V2H2V1C2 0.45 1.55 0 1 0C0.45 0 0 0.45 0 1V17C0 17.55 0.45 18 1 18C1.55 18 2 17.55 2 17V16H4V17C4 17.55 4.45 18 5 18H11C11.55 18 12 17.55 12 17V16H14V17C14 17.55 14.45 18 15 18C15.55 18 16 17.55 16 17V1C16 0.45 15.55 0 15 0C14.45 0 14 0.45 14 1ZM4 14H2V12H4V14ZM4 10H2V8H4V10ZM4 6H2V4H4V6ZM14 14H12V12H14V14ZM14 10H12V8H14V10ZM14 6H12V4H14V6Z'
										fill='white'
									/>
								</svg>
							</span>
							Категории фильмов
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Новые</a>
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Исторические</a>
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Драмы</a>
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Мелодрамы</a>
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Военный</a>
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Фантастика</a>
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Фильмы основанныe на реальных событиях</a>
						</li>
					</ul>
					<ul className={styles.menu}>
						<li className={styles.menu_item}>
							<span>
								<svg
									width='23'
									height='26'
									viewBox='0 0 23 26'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M2 5.29461C6.39281 0.901797 13.5157 0.901797 17.9085 5.29461C22.3013 9.68742 22.3013 16.8103 17.9085 21.2031C13.5157 25.5959 6.39281 25.5959 2 21.2031'
										stroke='white'
										stroke-width='3'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
									<path
										d='M15.1867 13.2489L6.81543 8.41553V18.0822L15.1867 13.2489Z'
										stroke='white'
										stroke-width='3'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>
							</span>
							Категории сериалов
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Новые</a>
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Исторические</a>
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Драмы</a>
						</li>
						<li className={styles.menu_item}>
							<a href='#'>Мелодрамы</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
