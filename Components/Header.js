import React from "react";
import { StyleSheet,Text,View } from "react-native";

export default function Header(){

    return(
        <View style={styles.header}>
            <Text style={styles.title}>List of Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 40,
        backgroundColor: 'red',
    },
    title:{
        textAlign: 'center',
        fontWeight: 'bold ',
        color : '#000',
        fontSize:20,
    }
});