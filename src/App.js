import React, { useEffect, useState, useRef } from "react";

let AppCallCount = 0;

function App() {
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);

  console.log("시작");

  useEffect(() => {
    AppCallCount++;
    console.log(`AppCallCount : ${AppCallCount}번`);
  }, [])

  console.log("끝");

  const [no, setNo] = useState(0);
  return (
    <>
      <button onClick={() => setNo(no + 1)}>증가 : {no}</button>
    </>
  );
}

export default App;