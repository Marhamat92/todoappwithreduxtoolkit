import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import uuid from 'uuid';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo={
        id:uuid.v4(),
        title:action.payload,
        completed:false
      }
    }
  }
});
