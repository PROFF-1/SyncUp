import { StyleSheet, Text, View,Alert } from 'react-native'
import React from 'react'
import Buttons from '../Components/Buttons'
import { getAuth,signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {

  const handleLogout = async () => {
    const auth = getAuth(); 
    try {
      await signOut(auth); // Sign out the user
      // Optionally, navigate to the login screen
      navigation.navigate('AuthenticationScreen'); // Replace with your login screen
    } catch (error) {
      console.error('Logout error:', error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
   
  }
})