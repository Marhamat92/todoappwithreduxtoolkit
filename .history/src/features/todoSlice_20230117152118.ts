import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import uuid from 'uuid';

export interface Todo {
  id: number;
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
        id:uuid.v4(),
        title:action.payload,
        completed:false
      }
      state.push(newTodo);
    }
  }
});


export default todoSlice.reducer; // export the reducer so we can use it in our store
export const { add } = todoSlice.actions; // export the actions, so we can use them in our components