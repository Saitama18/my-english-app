import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {Main} from './components/Main'

export default function App() {
  const [fontsLoaded] = useFonts({
    'ComicNeueBold': require('./assets/fonts/ComicNeue-Bold.ttf'),
    'ComicNeueBoldItalic': require('./assets/fonts/ComicNeue-BoldItalic.ttf'),
  });

  if (!fontsLoaded) return null;


  return (
    <Main/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'ComicNeueBold',
    fontSize: 20,
    color: "#47e9a3"
  }
});
