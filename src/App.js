import React, { useState, useRef } from "react";

function NewTodoForm({ todosState }) {
  const onSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    
    form.content.value = form.content.value.trim();

    if(form.content.value.length == 0){
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
      <form onSubmit={onSubmit}>
        <input autoComplete="off" type="text" name="content" placeholder="할 일을 입력하세요"/>
        <input type="submit" value="추가"/>
        <input type="reset" value="취소"/>
      </form>
    </>
  )
}

// 보여주는 역할
function TodoApp({ todosState }) {
  return (
    <>
      <NewTodoForm todosState={todosState} />
      <hr />
      <ul>
        {todosState.todos.map((todo, index) => (
          <li key={index}>
            {todo.id} {todo.regDate} {todo.content}
          </li>
        ))}
      </ul>
    </>
  )
}

//
function useTodoState() {
  const [todos, setTodos] = useState([]);
  const lastTodoIdRef = useRef(0);

  const addTodo = (newContent) => {
    const id = ++lastTodoIdRef.current;

    const newTodo = {
      id,
      content: newContent,
      regDate: "2023-05-08 19:17:00",
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

function App() {
  const todosState = useTodoState();
  return (
    <>
      <TodoApp todosState={todosState} />
    </>
  );
};

export default App;