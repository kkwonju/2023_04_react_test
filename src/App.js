import React, { useState, useRef } from "react";

// UI에 가까운 것들
function TodoApp({ todosState }) {
  const onBtnAddTodoClick = () => {
    todosState.addTodo("안녕");
  };

  const onBtnRemoveTodoClick = () => {
    todosState.removeTodo(1);
  }

  const onBtnModifyTodoClick = () => {
    todosState.modifyTodo(1, "ㅋㅋㅋ");
  }
  return (
    <>
      <button onClick={onBtnAddTodoClick}>추가</button>
      <button onClick={onBtnModifyTodoClick}>수정</button>
      <button onClick={onBtnRemoveTodoClick}>삭제</button>
      <hr />
      <ul>
        {todosState.todos.map((todo, index) => (
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

// 커스텀 Hook 만들기
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
  const todosState = useTodosState();

  return (
    <>
      <TodoApp todosState={todosState} />
    </>
  );
};

export default App;