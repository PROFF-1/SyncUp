import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppStack from './Navigations/AppStack';
import 'react-native-gesture-handler';


export default function App() {
  return (
    <View style={styles.container}>
      <AppStack />
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
