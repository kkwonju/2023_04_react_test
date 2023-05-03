import React, { useState, useRef } from "react";

// UI에 가까운 것들
function TodoApp({
  addTodo,
  removeTodo,
  modifyTodo,
  todos }) {
  const onBtnAddTodoClick = () => {
    addTodo("안녕");
  };

  const onBtnRemoveTodoClick = () => {
    removeTodo(1);
  }

  const onBtnModifyTodoClick = () => {
    modifyTodo(1, "ㅋㅋㅋ");
  }
  return (
    <>
      <button onClick={onBtnAddTodoClick}>추가</button>
      <button onClick={onBtnModifyTodoClick}>수정</button>
      <button onClick={onBtnRemoveTodoClick}>삭제</button>
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

// Hook으로 만들기
function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: "2023-05-03 20:07:50"
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index);
    setTodos(newTodos);
  }

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) => _index != index ? todo : { ...todo, content: newContent });
    setTodos(newTodos);
  }
  return {
    todos,
    addTodo,
    removeTodo,
    modifyTodo,
  }
};

function App() {
  const {
    todos,
    addTodo,
    removeTodo,
    modifyTodo,
  }
    = useTodosState();
  return (
    <>
      <TodoApp
        addTodo={addTodo}
        removeTodo={removeTodo}
        modifyTodo={modifyTodo}
        todos={todos}
      />
    </>
  );
};

export default App;