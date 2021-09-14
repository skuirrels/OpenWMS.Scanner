import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'

import Login from 'scenes/login'

const Stack = createStackNavigator()
const navigationProps = {
  headerTintColor: colors.white,
  headerStyle: { backgroundColor: colors.black, shadowColor: 'transparent' },
  headerTitleStyle: { fontSize: 40 },
  headerHideShadow: true,
}

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={navigationProps}

    >
      <Stack.Screen
        name="Demo App"
        component={Login}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
