import { configureStore } from '@reduxjs/toolkit'
import todoReducer, { TodoState } from "./feature/ToDoList"
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore<{ todoList: TodoState }>({
  reducer: {
    todoList: todoReducer
  },
  preloadedState: loadFromLocalStorage()
})


store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch