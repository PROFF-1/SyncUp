import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';
import Submisssions from '../Screens/Submisssions';
import Classroom from '../Screens/Classroom';
import UploadProject from '../Screens/UploadProject';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#312F6F',
        height: 80,
        paddingHorizontal: 20,
      },
     }} initialRouteName='Home'>
      <Tab.Screen name="Submission" component={Submisssions} options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <View style={styles.iconContainer}>
            <Image source={require('../assets/submissions.png')}   style={{
              height: 30,
              width: 30,
              tintColor: focused ? '#fff' : 'grey',
            }}/>
            <Text style={[{color: focused ? '#fff' : 'grey',}, styles.text]}>Submissions</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name="Classroom" component={Classroom} options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <View style={styles.iconContainer}>
            <Image source={require('../assets/classroom.png')}  style={{
              height: 30,
              width: 30,
              tintColor: focused ? '#fff' : 'grey',
            }}/>
            <Text style={[{color: focused ? '#fff' : 'grey',}, styles.text]}>  Classroom</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <View style={styles.homeIconContainer}>
            <View style={styles.homeIconContainerInner}>
              <Image source={require('../assets/home.png')}  style={{
              height: 35,
              width: 30,
              tintColor: focused ? '#fff' : 'grey',
            }}/>
            </View>
          </View>
        ),
      }}/>
      <Tab.Screen name="UploadProject" component={UploadProject}options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <View style={styles.iconContainer}>
            <Image source={require('../assets/upload.png')}
            style={{
              height: 30,
              width: 30,
              tintColor: focused ? '#fff' : 'grey',
            }}/>
            <Text style={[{color: focused ? '#fff' : 'grey',}, styles.text]}>     Upload</Text>
          </View>
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile}options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <View style={styles.iconContainer}>
            <Image source={require('../assets/profile.png')}  style={{
              height: 30,
              width: 30,
              tintColor: focused ? '#fff' : 'grey',
            }}/>
            <Text style={[{color: focused ? '#fff' : 'grey',}, styles.text]}>     Profile</Text>
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: -5,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    width: 65, 
    fontSize:10,
  },

  homeIconContainer:{
    position: 'absolute',
    top: -50,
    backgroundColor: '#fff',
    height:90,
    width:90,
    borderRadius:'50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIconContainerInner:{
    backgroundColor: '#312F6F',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:'50%',
    height: 80,
    width: 80,
  }
});