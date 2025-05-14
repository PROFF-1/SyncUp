import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Buttons from '../Components/Buttons'
import FullLogoSVGComponent from '../Components/Svgs/FullLogo'


export default function UserTypeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <FullLogoSVGComponent style={styles.logo}/>
      <Buttons title="Lecturer" onPress={() => navigation.navigate('GettingStarted')} customStyles={styles.Buttons1}/>
        <Buttons title="Student" onPress={() => console.log('User')} customStyles={styles.Buttons2}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  Buttons1:{
    position: 'absolute',
    bottom:145,
    left: 40
  },
  Buttons2:{
    position: 'absolute',
    bottom:67,
    left: 40
  },
  logo:{
    position: 'absolute',
    top: 40,
    left: 40,
    width: 200,
    height: 200,
  }
})