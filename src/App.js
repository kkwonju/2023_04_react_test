import { AppBar, Toolbar, Button, TextField } from "@mui/material";
import React, { useState, useRef } from "react";

function useTodosState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: dateToStr(new Date()),
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const modifyTodo = (index, newContent) => {
    const newTodos = todos.map((todo, _index) => _index != index ? todo : { ...todo, content: newContent })
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, _index) => _index != index); // _index와 index가 같지 않은 것들로만 구성
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    modifyTodo,
    removeTodo,
  };
};

// App
function App() {
  const todosState = useTodosState();

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.content.value = form.content.value.trim();

    if (form.content.value.length == 0) {
      alert("뭐라도 입력해..");
      form.content.focus();
      return;
    }
    todosState.addTodo(form.content.value);
    form.content.value = "";
    form.content.focus();
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div className="flex-1"></div>
          <span className="font-bod">My Note</span>
          <div className="flex-1"></div>
        </Toolbar>
      </AppBar>

      <form onSubmit={onSubmit} className="flex flex-col mt-5 px-5 gap-2">
        <TextField autoCapitalize="off" name="content" variant="outlined" label="할 일 입력" />
        <Button variant="contained">추가</Button>
      </form>
      <div className="mt-5 px-4">
        <ul>
          {todosState.todos.map((todo) => (
            <li key={todo.id} className="mt-10">
              <div className="flex gap-2">
                <span>번호 : {todo.id}</span>
                <span>날짜 : {todo.regDate}</span>
              </div>
              <div>{todo.content}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* {todosState.todos.length} */}
    </>
  );
};

export default App;

// 날짜객체 입력받아 yyyy-mm-dd hh:mm:ss 형태로 반환
function dateToStr(d) {
  const pad = (n) => {
    return n < 10 ? "0" + n : n;
  }

  return (
    d.getFullYear() +
    "-" +
    pad(d.getMonth() + 1) +
    "-" +
    pad(d.getDate()) +
    " " +
    pad(d.getHours()) +
    ":" +
    pad(d.getMinutes()) +
    ":" +
    pad(d.getSeconds())
  );
}
