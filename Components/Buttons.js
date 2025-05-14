import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Buttons({title, onPress, customStyles={}}) {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  button: {
    backgroundColor:'#312F6F',
    width:337,
    height: 54,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2.5,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginBottom:24
  },

  buttonText:{
    fontSize:16,
    fontWeight:'600',
    color:'#FFFFFF',
  }
})