import { AppBar, Toolbar, Button, TextField, Chip, Box } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";

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

    // 입력되는 순서
    // setTodos((todos) => [...todos, newTodo]); // 정 (선입이 위로)
    setTodos((todos) => [newTodo, ...todos]); // 역 (후입이 위로)
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

  useEffect(() => {
    todosState.addTodo("운동\n스트레칭\n요가\n필라테스\n헬스");
    todosState.addTodo("공부");
    todosState.addTodo("독서");
  }, [])

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
        <TextField
          minRows={3}
          maxRows={10}
          autoComplete="off"
          name="content"
          variant="outlined"
          label="할 일 입력"
        />
        <Button variant="contained" type="submit">추가</Button>
      </form>
      <div className="mt-5 px-4">
        <ul>
          {todosState.todos.map((todo, index) => (
            <li key={todo.id} className="mt-10">
              <div className="flex gap-2">
                <Chip
                  label={`번호 : ${todo.id}`}
                  variant="outlined"
                />
                <Chip
                  label={`날짜 : ${todo.regDate}`}
                  variant="outlined"
                  color="secondary"
                  className="!pt-1"
                />
              </div>
              <div className="mt-4 shadow rounded-[20px] flex">
                <Button variant="text" className="flex-shrink-0 !items-start !rounded-[20px_0_0_20px]">
                  <span
                    className={classNames(
                      "flex items-center",
                      "text-3xl",
                      {
                        "text-[color:var(--mui-color-primary-main)]"
                          : index % 2 == 0,
                      }
                      ,
                      {
                        "text-[#dfdfdf]"
                          : index % 2 != 0,
                      }
                    )}
                  >
                    <i class="fa-solid fa-check"></i>
                  </span>
                </Button>
                <div class="whitespace-pre-wrap flex items-center leading-relaxed hover:text-[color:var(--mui-color-primary-main)] flex-grow">
                  {todo.content}
                </div>
                <Button 
                className="flex-shrink-0 !rounded-[0_20px_20px_0]"
                color="inherit">
                  <span className=" text-[#dfdfdf] flex items-center text-2xl">
                    <i class="fa-solid fa-ellipsis-vertical fa-rotate-90"></i>
                  </span>
                </Button>
              </div>
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
