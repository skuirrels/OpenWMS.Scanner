import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './tabs'

export default () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
)
