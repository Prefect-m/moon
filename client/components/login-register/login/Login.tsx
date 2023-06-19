'use client'
import { FC, useRef } from 'react'
import { Fields } from '@/components'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { AiFillLock } from 'react-icons/ai'
import { ILoginProps } from './Login.props'

export const Login: FC<ILoginProps> = ({ btnClass }) => {
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	return (
		<>
			<Fields
				type='text'
				Icon={BsFillEnvelopeFill}
				name='email'
				fieldName='E-mail'
				isRequired
				reference={emailRef}
			/>
			<Fields
				type='password'
				Icon={AiFillLock}
				name='password'
				fieldName='Пароль'
				isRequired
				reference={passwordRef}
			/>
			<button className={btnClass}>Войти</button>
		</>
	)
}
