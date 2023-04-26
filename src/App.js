import React, { useEffect, useState, useRef } from "react";

let AppCallCount = 0;

function App() {
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const [no, setNo] = useState(0);

  useEffect(() => {
    inputNameRef.current.focus();
  }, [])

  return (
    <>
      <input ref={inputNameRef} type="text" placeholder="이름" />
      <hr />
      <input ref={inputAgeRef} type="number" placeholder="나이" />
      <hr />
      <button onClick={() => { setNo(no + 1); inputAgeRef.current.focus(); }}>
        증가 : {no}
      </button>
    </>
  );
}

export default App;