import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    
    const pressHandler = () => {
        if(!value.trim()) return;
        onSubmit(value)
        setValue('')
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input} 
                onChangeText={setValue} 
                value={value}
                placeholder="Введите задачку"
            />
            <Button title="Добавить" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
      width: "65%",
      marginLeft: "2%",
      borderStyle: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: "#3949ab",
      
    }
})