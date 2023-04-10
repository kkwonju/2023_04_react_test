import React, { useState } from "react";

function App() {
  // [초기값, 초기값을 어떻게 할 것인가]
  const [num, setNum] = useState(0);

  const onBtnIncreaseClicked = () => setNum(num + 1);

  const onBtnDecreaseClicked = () => setNum(num - 1);
  
  const reset = () => {
    setNum(0);
  };




  return (
    <>
      <div>
        NUM : {num}
      </div>
      <button onClick={onBtnIncreaseClicked}>1 증가</button>
      <br/>
      <button onClick={onBtnDecreaseClicked}>1 감소</button>
      <br/>
      <button onClick={() => setNum(num + 10)}>10 증가</button>
      <br/>
      <button onClick={() => setNum(num - 10)}>10 감소</button>
      <br/>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
