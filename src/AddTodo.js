import React, {useState} from 'react'
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { AppButton } from './AppButton.js'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    
    const pressHandler = () => {
        if(!value.trim()) return Alert.alert('Ошибка', 'Название задачи не должно быть пустым');
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
                autoCorrect={false}
                autoCapitalize='none'
            />
            <AppButton 
                title="Добавить" 
                onPress={pressHandler} 
            />
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
      borderBottomColor: "#8b3457",
    }
})