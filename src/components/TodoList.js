// src/components/TodoList.jsx

// import useSelector from react-redux
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

// create TodoList component
function TodoList() {
  // get todos from store
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <h1>Todo List</h1>
      <p> Total todos: {todos.length} </p>
      <hr />
      {todos && todos.map((todo) => {
        return (
            <TodoItem 
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            deadline={todo.deadline}
            status={todo.status}
            />
        )
      })}
    </div>
  );
}

export default TodoList;