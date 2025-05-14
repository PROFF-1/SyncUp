import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import GettingStarted from '../Screens/GettingStarted'
import UserTypeScreen from '../Screens/UserTypeScreen'
import AuthenticationScreen from '../Screens/AuthenticationScreen'
import HomeScreen from '../Screens/HomeScreen'

const Stack = createStackNavigator();
export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GettingStarted">
        <Stack.Screen name="UserTypeScreen" component={UserTypeScreen} options={{headerShown: false }}/>
        <Stack.Screen name="GettingStarted" component={GettingStarted} options={{headerShown: false }}/>
        <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} options={{headerShown:false }}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



