import React, { useState, useRef } from "react";

function NewTodoForm({ todosState }) {
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
      <form onSubmit={onSubmit}>
        <input autoComplete="off" type="text" name="content" placeholder="할 일을 입력하세요" />
        <input type="submit" value="추가" />
        <input type="reset" value="취소" />
      </form>
    </>
  )
}

// 리스트( 메뉴 ) 아이템
function TodoListItem({ todosState, todo, index }) {
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditContent] = useState(todo.content);
  const editedContentInputRef = useRef(null);

  const removeTodo = () => {
    todosState.removeTodo(index);
  };

  const showEdit = () => {
    setEditMode(true);
  }

  const commitEdit = () => {
    if(editedContent.trim().length == 0){
      alert('할 일 입력해..');
      editedContentInputRef.current.focus();
      return;
    }

    todosState.modifyTodo(index, editedContent.trim());

    setEditMode(false);
  }

  const cancelEdit = () => {
    setEditMode(false);
    setEditContent(todo.content);
  }

  return (
    <li key={index}>
      {todo.id} {todo.regDate}
      {editMode || (
        <>
          {todo.content}
          &nbsp;
          <button onClick={showEdit}>수정</button>{" "}
        </>
      )}
      {editMode && (
        <>
          <input type="text" placeholder="할 일 입력" value={editedContent} onChange={(e) => setEditContent(e.target.value)}/>
          <button onClick={commitEdit}>수정완료</button>
          <button onClick={cancelEdit}>수정취소</button>
        </>
      )}
      <button onClick={removeTodo}>삭제</button>
    </li>
  )
}

// 리스트( 메뉴 )
// function TodoList({ todosState }) {
//   return (
    
//   )
// }

// 할 일 App
function TodoApp({ todosState }) {
  return (
    <>
      <NewTodoForm todosState={todosState} />
      <hr />
      <TodoList todosState={todosState} />
    </>
  )
}

// 기능


// App
function App() {
  const todosState = useTodoState();
  return (
    <>
      <TodoApp todosState={todosState} />
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
