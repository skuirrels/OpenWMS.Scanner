import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { LoadingNavigator, HomeNavigator, ProfileNavigator  } from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Pending':
            return (
              <FontIcon
                name="stopwatch"
                color={focused ? colors.green : colors.white}
                size={30}
                solid
              />
            )
          case 'Receipt':
            return (
              <FontIcon
                name="receipt"
                color={focused ? colors.green : colors.white}
                size={30}
                solid
              />
            )
          case 'Loading':
            return (
              <FontIcon
                name="upload"
                color={focused ? colors.green : colors.white}
                size={30}
                solid
              />
            )
          case 'Home':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.green : colors.white}
                size={30}
                solid
              />
            )
          case 'Search':
            return (
              <FontIcon
                name="search"
                color={focused ? colors.green : colors.white}
                size={30}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.white,
      inactiveTintColor: colors.gray,
      labelStyle: { fontSize: 13 },
      style: {
        height: 86,
        backgroundColor: colors.black,
        borderTopColor: colors.blackPearl,
        // borderTopWidth: 1,
        // paddingBottom: 5,
        paddingTop: 5,
      },
    }}
    initialRouteName="Loading"
    swipeEnabled={false}
  >
    <Tab.Screen name="Pending" component={HomeNavigator} />
    <Tab.Screen name="Receipt" component={HomeNavigator} />
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Loading" component={LoadingNavigator} />
    <Tab.Screen name="Search" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
