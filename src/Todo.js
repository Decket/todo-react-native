import React from 'react'
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity 
            style={styles.todo} 
            activeOpacity={0.5} 
            onLongPress={() => onRemove(todo.item.id)}
        >
            <Text>{todo.item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
    }
})