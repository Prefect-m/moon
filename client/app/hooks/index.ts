'use client'
import { useContext } from 'react'
import { PlayerContext } from '../context/Player.context'
import { MenuNavigationContext } from '../context/MenuNavigationContext'

export const usePlayerContext = () => useContext(PlayerContext)
export const useMenuNavigationContext = () => useContext(MenuNavigationContext)
