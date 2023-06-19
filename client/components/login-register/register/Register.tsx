'use client'
import { FC, useRef } from 'react'
import { Fields } from '../fields/Fields'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { AiFillLock } from 'react-icons/ai'
import { IRegisterProps } from './Register.props'

export const Register: FC<IRegisterProps> = ({ btnClass }) => {
	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const passwordRef = useRef(null)
	return (
		<>
			<Fields
				type='text'
				Icon={FaUserAlt}
				name='name'
				fieldName='Имя'
				isRequired
				reference={nameRef}
			/>
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
			<button className={btnClass}>Регистрация</button>
		</>
	)
}
