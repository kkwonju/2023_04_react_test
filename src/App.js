import NoRecord from "./NoRecord";

export default function App() {

  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const arr1 = nums.map((el) => <li>내용 {el}</li>)

  const arr2 = [<li>내용1</li>, <li>내용2</li>, <li>내용3</li>];
  return (
    <>
      <NoRecord />
      <hr />
      <ul>{arr1}</ul>
      <ul>{arr2}</ul>
    </>
  );
}