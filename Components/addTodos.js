// new component for adding new todos
import React, {useState} from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function AddTodos({ submitHandler }) {
    
    // assigning the input to the use the usestate
    const [text, setText] = useState('');

    // forwarding the input to setText
    const changeHandler = (val) => {
        setText(val);
    }

    return(
       <View>
       <TextInput style={styles.txtinput}
       placeholder='add new todo...'
       onChangeText={changeHandler}  
       />
       
       <Button onPress={() => submitHandler(text)} title ='Add Todo' color='coral'/>
       </View> 
    )
}

const styles =StyleSheet.create({
    txtinput: {
        marginButtom :10,
        paddingHorizontal : 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor : '#ddd'
    },
});