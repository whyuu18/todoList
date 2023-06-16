import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice/TodoSlice";

const AddToForm = () => {
  // create dispatch function using useDispatch
  const dispatch = useDispatch();

  // create input state using useState
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  // create handleSubmit function
  const handleSubmit = (event) => {
    event.preventDefault();

    // create new todo object
    const newTodo = {
      title: title,
      description: description,
      deadline: deadline,
    };

    // dispatch action addTodo
    dispatch(addTodo(newTodo));

    // reset form
    setTitle("");
    setDescription("");
    setDeadline("");
  };

  return (
    <div>
      <h2>Create New Todo</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
        }}
      >
        <label for="title">Title:</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <label for="title">Description:</label>
        <textarea
          placeholder="Description"
          value={description}
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <label for="title">Deadline:</label>
        <input
          type="date"
          value={deadline}
          name="Deadline"
          onChange={(event) => setDeadline(event.target.value)}
          required
        />
        <input type="submit" value="Add Todo List" />
      </form>
    </div>
  );
};

export default AddToForm;