import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = React.useState('');
  const [item, setItem] = React.useState([]);

  const addItem = () => {
    setItem([...item, {data: text, key: Math.random()}])
  }

  return (
    <View style={styles.container}>
      <Text>Todo App</Text>
      <View style = {{flexDirection: 'row', marginTop: 10}}>
        <TextInput 
          style = {styles.input} 
          placeholder = "Enter Product Name" 
          placeholderTextColor = "green"
          onChangeText = {setText}
          value = {text}
        />
        <Pressable 
          style = {styles.pressable}
          onPress = {addItem}
        >
          <Text style = {{color: '#fff'}}>Add</Text>
        </Pressable>
      </View>
      <FlatList 
        data = {item}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'blue'
  },
  pressable: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  }
});
