import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  /** 실제 실행될 기능 */
  const addTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  }

  const modifyTodo = (index, newTodo) => {
    const newTodos = todos.map((todo, _index) => _index != index ? todo : newTodo);
    setTodos(newTodos);
  }

  /** 클릭 시 실행 */
  const onAddBtnClick = () => {
    addTodo(todos.length + 1);
  }

  const onRemoveBtnClick = () => {
    removeTodo(0);
  }

  const onEditBtnClick = () => {
    modifyTodo(1, "안녕");
  }

  // const onClick = () => {
  //   // const newTodos = [...todos, todos.length + 1];
  //   // setTodos(newTodos);
  //   addTodo(todos.length + 1);
  // }

  return (
    <>
      <div>
        {JSON.stringify(todos)}
      </div>
      <button onClick={onAddBtnClick}>추가</button>
      <button onClick={onRemoveBtnClick}>제거</button>
      <button onClick={onEditBtnClick}>수정</button>
    </>
  );
};

export default App;