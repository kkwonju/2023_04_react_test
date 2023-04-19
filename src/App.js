
export default function App() {
  const fun1 = () => {
    console.log('fun1 실행됨.');
  };

  const fun2 = (a, b) => {
    console.log(`fux2 실행됨 : ${a}, ${b}`);
  };

  return (
    <>
    <button onClick={fun1}>함수 1</button>
    <button onClick={() => fun2(1, 2)}>함수 2</button>
    </>
  );
}