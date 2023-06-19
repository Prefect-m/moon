'use client'
import { useContext } from 'react'
import { PlayerContext } from '../context/Player.context'
import { MenuNavigationContext } from '../context/MenuNavigationContext'
import { SignInContext } from '../context/SignInContext'

export const usePlayerContext = () => useContext(PlayerContext)
export const useMenuNavigationContext = () => useContext(MenuNavigationContext)
export const useSignContext = () => useContext(SignInContext)
