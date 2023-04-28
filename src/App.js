import React, { useEffect, useState } from "react";

// 
function isPrimeNumber(no) {
  for (let i = 2; i < no; i++) {
    if (i * i > no) {
      break;
    }

    if (no % i == 0) {
      return false;
    }
  }

  return true;
}

function getPrimeNumbers(max) {
  const primeNumbers = [];

  for (let i = 2; i < max; i++) {
    if (isPrimeNumber(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

function getPrimeNumbersCount(max) {
  return getPrimeNumbers(max).length;
}

// App
function App() {
  const [inputedNo, setInputedNo] = useState(0);
  const [no, setNo] = useState(0);
  
  const [primeNumbersCount, setPrimeNumbersCount] = useState(0);

  useEffect(() => {
    const primeNumbersCount = getPrimeNumbersCount(inputedNo);
    setPrimeNumbersCount(primeNumbersCount);
  }, [inputedNo]);
  
  // const primeNumbersCount = getPrimeNumbersCount(inputedNo);

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    form.number.value = form.number.value.trim();

    if (form.number.value.length == 0) {
      alert('숫자를 입력하세요!');
      form.number.focus();

      return;
    }

    const number = form.number.valueAsNumber;
    form.number.focus();

    setPrimeNumbersCount(primeNumbersCount);
    setInputedNo(number);
  }

  return (
    <>
    <button onClick={() => setNo(no + 1)}> 번호 : {no} </button>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          type="number"
          name="number"
          placeholder="숫자를 입력해주세요"
          defaultValue="0"
          className="input input-bordered" />
        <button type="submit" className="btn btn-outline">확인</button>
        <hr />
        <div>MAX : {inputedNo}</div>
        <div>소수의 갯수 : {primeNumbersCount}</div>
      </form>
    </>
  );
}

export default App;