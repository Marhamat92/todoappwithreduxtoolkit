import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {v4} from 'uuid';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}



const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newTodo={
        id:v4(),
        title:action.payload,
        completed:false
      }
      state.push(newTodo);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});


export default todoSlice.reducer; // export the reducer so we can use it in our store
export const { add } = todoSlice.actions; // export the actions, so we can use them in our components