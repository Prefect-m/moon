'use client'
import { FC, useState } from 'react'
import styles from './Login-register.module.scss'
import { Login, LogoIcon, Register } from '@/components'
import { AiFillInfoCircle } from 'react-icons/ai'
import classNames from 'classnames'
import { useSignContext } from '@/app/hooks'

export const LoginRegisterScreen: FC = () => {
	const [defaultActive, setDefaultActive] = useState(false)
	const { isOpen, handlerCloseOpen } = useSignContext()

	const changeHandler = () => {
		if (!defaultActive) {
			setDefaultActive(true)
		} else {
			setDefaultActive(false)
		}
	}

	return (
		<div className={classNames(styles.sign, { [styles.active]: isOpen })}>
			<div className={styles.sign_wrap}>
				<div className={styles.sign_top}>
					<LogoIcon />
					<div className={styles.sign_close} onClick={handlerCloseOpen}>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								x='1.83008'
								width='19'
								height='2.58824'
								rx='1.29412'
								transform='rotate(45 1.83008 0)'
								fill='#ACACAC'
							/>
							<rect
								y='13.4351'
								width='19'
								height='2.58824'
								rx='1.29412'
								transform='rotate(-45 0 13.4351)'
								fill='#ACACAC'
							/>
						</svg>
						<span>close</span>
					</div>
				</div>
				<div className={styles.sign_content}>
					<div className={styles.sign_buttons}>
						<button>
							<AiFillInfoCircle size={14} />
							{defaultActive ? 'Войдите в систему' : ' пройдите регистрацию'}
						</button>
						<button onClick={changeHandler}>
							{defaultActive ? 'регистрация' : ' выполнить вход'}
						</button>
					</div>
					{defaultActive ? (
						<Login btnClass={styles.submit_buttion} />
					) : (
						<Register btnClass={styles.submit_buttion} />
					)}
				</div>
			</div>
		</div>
	)
}
