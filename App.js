import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserTypeScreen from './Screens/UserTypeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <UserTypeScreen/>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
