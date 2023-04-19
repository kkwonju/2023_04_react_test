import { useState } from "react";

export default function App() {
  const [ages, setAges] = useState([1, 2, 3]);
  
  const onClick = () => {
    setAges((ages) => [...ages, ages.length + 1]);
    setAges((ages) => [...ages, ages.length + 1]);
    setAges((ages) => [...ages, ages.length + 1]);
  };

  return (
    <>
      <button onClick={onClick}>나이 : [{ages.join(",")}]</button>
    </>
  );
}