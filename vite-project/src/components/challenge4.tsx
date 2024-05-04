import React, { FormEvent, useState } from "react";
import "../styles/todo.css";
import { Link } from "react-router-dom";
export const ToDoList: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [todos, setTodos] = useState<any[]>([]);
  const [completed, setCompleted] = useState<any[]>([]);
  const handleToDoAddition = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title === "" || description === "") {
      return;
    }
    const newTodo = { title, description };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setDescription("");
  };
  const handleDelete = (index: number) => {
    const updatedToDos = todos.filter((_, i) => i !== index);
    setTodos(updatedToDos);
  };
  const handleCompleted = (index: number) => {
    const completedTodos = todos.find((_, i) => i === index);
    if (completedTodos) {
      setCompleted((completedTodo) => [...completedTodo, completedTodos]);
    }
  };
  return (
    <>
      <div className="todoMaincontainer">
        <div className="todolinks">
          <Link to={"/"}>home</Link>
          <Link to={"/challenge1"}>challenge1</Link>
          <Link to={"/challenge2"}>challenge2</Link>
          <Link to={"/challenge3"}>challenge3</Link>
        </div>
        <form className="todoformContainer" onSubmit={handleToDoAddition}>
          <h1 className="header">My Todos</h1>
          <div className="formElement">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="formElement">
            <label htmlFor="description">description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="btnContainer">
            <input className="btn" type="submit" value={"Add"} />
          </div>
        </form>
        <div className="todoGeneralContainer">
          <div className="todos">
            {todos.map((todo, index) => (
              <div key={index} className="todoContainer">
                <div className="titleAndDescription">
                  <h2>{todo.title}</h2>
                  <p>{todo.description}</p>
                </div>
                <div>
                  <button onClick={() => handleDelete(index)}>❌</button>
                  <button onClick={() => handleCompleted(index)}>✔</button>
                </div>
              </div>
            ))}
          </div>

          {completed.map((todo, index) => (
            <div key={index}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
            </div>
          ))}

          {/* </div> */}
        </div>
      </div>
    </>
  );
};
