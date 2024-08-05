import { useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { TodoContext } from "./context/ContextApi";
const TodoApp = () => {
    const { newTodo,
        todos,
        setNewTodo,
        setEditId,
        addTodoHandler,
        onRemoveTodoHandler,
        onTodoStatusHandler } = useContext(TodoContext)



    const renderItem = ({ item }) => (
        <View style={styles.todoItem}>
            <View style={styles.todoTextContainer}>
                <Text style={styles.todoTitle}>{item.todo}</Text>
                <Text style={styles.todoStatus}>{item.status}</Text>
            </View>
            <View style={styles.todoButtons}>
                <TouchableOpacity
                    onPress={() => onTodoStatusHandler(item.id)}
                    style={styles.todoButton}>
                    <Text
                        style={styles.todoButtonText}
                    >
                        {item.status === 'Pending' ? 'Done' : 'Pending'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setNewTodo(item.todo)
                        setEditId(item.id)

                    }}
                    style={styles.todoButton}>
                    <Text style={styles.todoButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onRemoveTodoHandler(item.id)}
                    style={styles.todoButton}>
                    <Text style={styles.todoButtonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );


    return (
        <View style={styles.main}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>TODO APPLICATION</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter todo task"
                    placeholderTextColor="#aaa"
                    value={newTodo}
                    onChangeText={setNewTodo}
                />
                <TouchableOpacity onPress={addTodoHandler} style={styles.addButton}>
                    <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.todoList}
            />
        </View>
    );
};

export default TodoApp;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#f0f4f8',
        padding: 20,
    },
    headingContainer: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 40,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#6200ee',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    todoList: {
        marginTop: 20,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    todoTextContainer: {
        flex: 1,
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    todoStatus: {
        fontSize: 14,
        color: '#666',
    },
    todoButtons: {
        flexDirection: 'row',
    },
    todoButton: {
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#6200ee',
    },
    todoButtonText: {
        color: '#fff',
    },
});
