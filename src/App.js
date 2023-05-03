import React, { useState } from "react";

function App() {
  const [lastTodoId, setLastTodoId] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = (newContent) => {
    const id = lastTodoId + 1;
    setLastTodoId(id);

    const newTodo = {
      id,
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
            {todo.id}&nbsp;
            {todo.regDate}&nbsp;
            {todo.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;