import { NavigationContext } from '@/context/Navigation.context'
import { PlayerContext } from '@/context/Player.context'
import { useContext } from 'react'

export const useNavigation = () => useContext(NavigationContext)
export const useScreen = () => useContext(PlayerContext)
