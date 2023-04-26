import React, { useEffect, useState, useRef } from "react";

let AppCallCount = 0;
let SubCallCount = 0;

function Sub() {
  SubCallCount++;
  console.log(`SubCallCount : ${SubCallCount}`);

  const [no, setNo] = useState(0);

  return (
    <>
      <div style={{ border: "10px solid blue", padding: 10 }}>
        <button className="btn btn-outline" onClick={() => setNo(no + 1)}>
          Sub 버튼 : {no}
        </button>
      </div>
    </>
  );
}

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);

  return (
    <>
      <div style={{ border: "10px solid red", padding: 10 }}>
        <button className="btn btn-outline" onClick={() => setNo(no + 1)}>
          App 버튼 : {no}
        </button>
        <hr />
        <Sub />
      </div>
    </>
  );
}

export default App;