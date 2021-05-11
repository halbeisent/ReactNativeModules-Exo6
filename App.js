import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.TextInput} onChangeText={onChangeText} value={text} placeholder="Entrez un texte ici"></TextInput>
      <Button title="Mon super bouton" onPress={() => Alert.alert('Vous croyez vraiment que ce bouton fonctionne?')}></Button>
      <StatusBar style="auto" />
    </SafeAreaView>
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
