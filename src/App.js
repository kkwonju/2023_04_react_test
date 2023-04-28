import React, { useEffect, useState, useMemo, useCallback } from "react";

let SubCallCount = 0;

// Sub
function Sub({ no1, no2, calculateFunc }) {
  SubCallCount++;
  console.log(`SubCallCount : ${SubCallCount}`);

  return (
    <>
      <div style={{ border: "10px solid red", padding: 10 }}>
        입력 : {no1}, {no2}
        <br />
        결과 : {calculateFunc(no1, no2)}
      </div>
    </>
  )
}

const MemoizedSub = React.memo(Sub);

// 밖으로 꺼내면 최초 1회 생성
// const calculateFunc = (a, b) => a + b;

let AppCallCount = 0;

// App
function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);

  // 함수는 함수가 실행될 때 새로 랜더링
  // const calculateFunc = (a, b) => a + b;

  // 함수 재사용
  const calculateFunc = useCallback((a, b) => a + b + no1, [no1]); // [no1] <- []안 값이 바뀌었을 때만 실행하겠다

  return (
    <>
      <button onClick={() => setNo1(no1 + 1)}>버튼 1 : {no1}</button>
      <hr />
      <button onClick={() => setNo2(no2 + 1)}>버튼 2 : {no2}</button>
      <hr />
      <MemoizedSub no1={10} no2={20} calculateFunc={calculateFunc}/>
    </>
  );
};

export default App;