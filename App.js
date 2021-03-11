import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Navbar } from './src/Navbar.js'
import { AddTodo } from './src/AddTodo.js'
import { Todo } from './src/Todo.js'


export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title,
        }])
    }

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id != id));
    }

    return (
        <View style={styles.container}>
        <Navbar title="Todo App"/>
            <View style={styles.buttonsContainer}>
                <AddTodo onSubmit={addTodo} />
            </View>
            <FlatList 
                keyExtractor={item => item.id.toString()}
                style={styles.listTodos}
                data={todos}
                renderItem={(item) => (
                    <Todo todo={item} onRemove={removeTodo} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    buttonsContainer: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    listTodos: {
        paddingHorizontal: 30,
        height: "80%",
        color: "#000",
    }
});
