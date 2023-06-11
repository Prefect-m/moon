'use client'
import { useContext } from 'react'
import { PlayerContext } from '../context/Player.context'

export const usePlayerContext = () => useContext(PlayerContext)
