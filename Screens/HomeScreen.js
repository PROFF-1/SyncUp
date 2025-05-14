import { StyleSheet, Text, View,Alert } from 'react-native'
import React from 'react'
import Buttons from '../Components/Buttons'
import { getAuth,signOut } from 'firebase/auth';

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
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Buttons title='Logout' onPress={handleLogout}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})