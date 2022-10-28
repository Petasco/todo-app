import React from "react";
import { StyleSheet,Text, TouchableOpacity, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text style={styles.itemtxt}> {item.txt}</Text>
                <MaterialIcons name="delete" size={25} color='red' />
                
            </View>
        </TouchableOpacity>
    )
     
}

const styles = StyleSheet.create({
    item: {
    padding: 16,
    marginTop : 16,
    borderColer: '#bbb',
    borderWidth: 0,
    borderStyle: 'dashed',
    borderRadius :10,
    backgroundColor: 'pink',
    flexDirection: 'row'
},
itemtxt:{
    marginRight :25,
}
})