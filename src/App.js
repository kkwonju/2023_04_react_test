import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newContent) => {
    const newTodo = {
      id: 1,
      content: newContent,
      regDate: "2023-05-03 20:07:50"
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const onBtnAddTodoClick = () => {
    addTodo("안녕");
  };

  return (
    <>
      <button onClick={onBtnAddTodoClick}>추가</button>
      <hr />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.id}
            <br />
            {todo.regDate}
            <br />
            {todo.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;