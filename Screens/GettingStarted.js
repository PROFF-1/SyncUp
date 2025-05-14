import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Buttons from '../Components/Buttons'
import IconLogoSVGComponent from '../Components/Svgs/IconLogoSvg'


export default function GettingStarted({navigation}) {
  return (
    <View style={styles.container}>
      <IconLogoSVGComponent style={styles.logo}/>
        <Buttons title="Get Started" onPress={() => navigation.navigate('AuthenticationScreen')} customStyles={styles.Buttons1}/>
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
  logo:{
    position: 'absolute',
    top: '30%',
    left: '30%',
    width: 200,
    height: 200,
  }
})