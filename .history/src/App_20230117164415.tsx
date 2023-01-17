import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { add, remove, toggleCompleted } from "./features/todoSlice";

function App() {
  const todos = useAppSelector((state) => state.todos); // state.todos is the name of the slice,we are using this to get data from the store
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch(); // this is the same as useDispatch() but it's typed

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleAdd = () => {
    dispatch(add(title));
    setTitle("");
  };

  const handleDelete = (id: string) => {
    dispatch(remove(id));
  };

  const handleMarkCompleted = (id: string) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div>
      <input type='text' value={title} onChange={handleTitleChange} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button>Mark Completed</button>
            <button onClick={() => handleDelete(todo.id)}>Delete Todo</button>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
