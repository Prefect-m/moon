import { NavigationContext } from '@/context/Navigation.context'
import { useContext } from 'react'

export const useNavigation = () => useContext(NavigationContext)
