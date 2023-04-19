import { useState } from "react";

let AppCallCount = 0;

export default function App() {
  AppCallCount++;
  console.log(`App이 ${AppCallCount}번 실행됨!`);

  const [no, setNo] = useState(0);

  const increaseNo = () => {
    // a = a + 5;
    setNo((no) => no+5);
    setNo((no) => no+5);
    setNo((no) => no+5);

    // a = 5;
    setNo(no + 5);
    setNo(no + 5);
    setNo(no + 5);
  };

  return (
    <>
      <button onClick={increaseNo}>no : {no}</button>
    </>
  );
}