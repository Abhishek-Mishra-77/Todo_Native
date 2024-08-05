import { createContext, useState } from "react";
import { ToastAndroid } from "react-native";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([])
    const [editId, setEditId] = useState("");


    const addTodoHandler = () => {
        if (!newTodo) {
            ToastAndroid.show('Please enter todo', ToastAndroid.SHORT);
            return;
        }
        if (editId) {
            const updatedTodos = todos.map((todo) => {
                if (todo.id == editId) {
                    return { ...todo, todo: newTodo }
                }
                return todo;
            })
            setTodos(updatedTodos)
            ToastAndroid.show('Todo updated successfully', ToastAndroid.SHORT);
        }
        else {
            setTodos((prev) => [...prev, { todo: newTodo, status: "Pending", id: Math.random().toString() }])
            ToastAndroid.show('Todo Added successfully', ToastAndroid.SHORT);
            setNewTodo("")
        }
        setEditId("")
        setNewTodo("")
    }

    const onRemoveTodoHandler = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
    }

    const onTodoStatusHandler = (id) => {
        const todoStatus = todos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    status: todo.status === "Pending" ? "Done" : "Pending"
                }
            }
            return todo;
        })

        setTodos(todoStatus)
    }

    const ctc = {
        newTodo,
        todos,
        setEditId,
        setNewTodo,
        addTodoHandler,
        onRemoveTodoHandler,
        onTodoStatusHandler
    }

    return (
        <TodoContext.Provider value={ctc}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }