import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';

export default function App() {
  const [outputText,setOutPutText] = useState('Open up App.js to start on your app!')
  return (
    <View>
      <View>
          <TextInput/>
          <Button title="ADD"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
