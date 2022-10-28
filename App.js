import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Alert, View, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './Components/Header';
import TodoItem from './Components/todoitem';
import AddTodos from './Components/addTodos';

export default function App() {
  const [todos, setTodos] = useState([
    {txt: 'Learn Python', key: '1'},
    {txt: 'Learn React Native',key: '2'},
    {txt: 'Learn Forex Trading', key: '3'},
  ]);

  // press handler for deleting the task through the key id
  const pressHandler =(key) =>{
    setTodos((previousTodos) => {
      // filter through the keys and delete the task
      return previousTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) =>{
    if (text.length <= 3){

      Alert.alert('Error!', 'Todos should be greater than 3 characters!', [
        {text: 'Okay'}
      ]);

  
    }
    else{
      setTodos ((previousTodos) => {
        return [
          { txt: text, key: Math.random().toString() },
          ...previousTodos
        ];
      });
    }
  }
  return (
    // dismissing the keyboard with touchablewithoutfeedback function
    <View style={styles.container}>
      <Header/>
      
      <View style={styles.content}>
        <AddTodos submitHandler ={submitHandler}/>

      <View style={styles.list}>
        <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} pressHandler={pressHandler} />
          //<Text>{item.txt}</Text>
        )}
        />

      </View>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED', 
  },
  content:{
    padding: 40,
    flex: 1,
  },
  list:{
    flex: 1,
    marginTop: 20,
  },

});
