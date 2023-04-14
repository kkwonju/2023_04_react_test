import React, { useState } from "react";

let AppCallCount = 0;

function Control() {
  AppCallCount++;
  console.log(`app이 ${AppCallCount}번 실행됨!`);

  const [name, setName] = useState("paul");
  const [age, setAge] = useState(10);
  const [address, setAddress] = useState("대전시 서구");

  return (
    <>
      <input type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => {
          console.log(`e.target.value: ${e.target.value}`);
          setName(e.target.value);
        }} />
      &nbsp; / &nbsp; 현재 이름 : {name}
      <hr />
      <input type="number"
        placeholder="나이를 입력해주세요"
        value={age}
        onChange={(e) => {
          console.log(`e.target.value: ${e.target.value}`);
          setAge(e.target.value);
        }} />
      &nbsp; / &nbsp; 현재 나이 : {age}
      <hr />
      <input type="text"
        placeholder="주소를 입력해주세요"
        value={address}
        onChange={(e) => {
          console.log(`e.target.value: ${e.target.value}`);
          setAddress(e.target.value);
        }} />
      &nbsp; / &nbsp; 현재 주 : {address}
      <hr />
      <div onMouseOver={(e) => {
        console.log('마우스가 이동했음');
      }}>
        마우스를 올려보세요
      </div>
    </>
  );
}

export default Control;