import { FC } from 'react'
import styles from './Login-register.module.scss'
import { LogoIcon } from '@/components'

export const LoginRegister: FC = () => {
	return (
		<div className={styles.sign}>
			<div className={styles.sign_wrap}>
				<div className={styles.sign_top}>
					<LogoIcon />
				</div>
			</div>
		</div>
	)
}
