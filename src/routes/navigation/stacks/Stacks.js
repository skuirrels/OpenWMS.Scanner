import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import Loading from 'scenes/loading';

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: colors.white,
  headerStyle: { backgroundColor: colors.black, shadowColor: 'transparent' },
  headerTitleStyle: { fontSize: 25 },
  headerHideShadow: true,
}

// ------------------------------------
// Navigators
// ------------------------------------
export const LoadingNavigator = () =>(
<Stack.Navigator
  initialRouteName="Loading"
  headerMode="screen"
  screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Loading"
      component={Loading}
      options={({ navigation }) => ({
        title: 'Packages',
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Packages',
      })}
    />
  </Stack.Navigator>
)

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Home',
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)
