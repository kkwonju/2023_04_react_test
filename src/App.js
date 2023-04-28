import React, { useEffect, useState, useMemo } from "react";

// 소수 구하기
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

let PNCCallCount = 0;

function PrimeNosCount({ max }) {
  PNCCallCount++;
  console.log(`PNCCallCount : ${PNCCallCount}`);

  const count = useMemo(() => getPrimeNumbersCount(max), [max]); 

  return (
    <>
      <div style={{ border: '10px solid black ', padding: 50 }}>
        {max} 사이에 존재하는 소스의 개수는 {count}개이다.
      </div>
    </>
  );
};

let AppCallCount = 0;

// App
function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);

  return (
    <>
      <PrimeNosCount max={100} />
      <hr />
      <PrimeNosCount max={200} />
      <hr />
      <PrimeNosCount max={300} />
      <hr />
      <PrimeNosCount max={1000000} />
      <button onClick={() => setNo(no + 1)}>버튼 : {no}</button>
    </>
  );
};

export default App;