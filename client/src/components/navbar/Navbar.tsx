import Link from 'next/link'
import styles from './navbar.module.scss'
import { FC } from 'react'
import { Logo } from '@/icons'
import { Field } from '@/components'
import { GoSearch } from 'react-icons/go'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillPlusSquareFill } from 'react-icons/bs'

export const Navbar: FC = (): JSX.Element => {
	return (
		<div className={styles.navbar}>
			<div className={styles.wrap}>
				{/* Logo and menubar */}
				<div className={styles.main}>
					<div className={styles.logo}>
						<Logo />
					</div>
					<div className={styles.menu}>
						<span></span>
						<span>menu</span>
					</div>
				</div>
				{/* search */}
				<div className={styles.search}>
					<Field title='Поиск по сайту' required />
					<div className={styles.search_content}>
						<GoSearch size={14} />
						<span>Поиск по названию</span>
					</div>
				</div>
				{/* action */}
				<div className={styles.action}>
					<button>
						<FaUserAlt size={15} />
					</button>
					<button>
						<BsFillPlusSquareFill size={15} />
					</button>
				</div>
			</div>
		</div>
	)
}
