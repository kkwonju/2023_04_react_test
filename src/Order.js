import React, { useState } from "react";

export default function Order() {
  const options = [
    "사이다 1.5",
    "밀키스 1.5",
    "코카콜라 1.5",
    "마운틴 듀 750",
    "웰치스 750",
  ];

  const [optionCheckeds, setOptionCheckeds] = useState([
    false,
    true,
    false,
    false,
    true,
  ]);

  const toggleOptionCheck = (index) => {
    const newOptionCheckeds = optionCheckeds.map((el, _index) => _index == index ? !el : el);
    setOptionCheckeds(newOptionCheckeds);
  }
  const btnAllChecked = optionCheckeds.every((el) => el);

  const toggleAllChecked = () => {
    if (btnAllChecked){
      // 전부 체크를 해제해야함
      const newOptionCheckeds = optionCheckeds.map((el) => false);
      setOptionCheckeds(newOptionCheckeds);
    } else {
      // 전부 체크
      const newOptionCheckeds = optionCheckeds.map((el) => true);
      setOptionCheckeds(newOptionCheckeds);
    }
  }

  return (
    <>
      <h2 style={{ fontSize: "1.5em" }}>음식주문</h2>

      <h2 style={{ fontSize: "1.3em" }}>옵션</h2>

      <span
        style={{ userSelect: 'none', cursor: 'pointer' }}
        onClick={toggleAllChecked}>
        {btnAllChecked ? "[v]" : "[]"} 전체선택
      </span>

      <ul>
        {options.map((option, index) => (
          <li style={{ userSelect: 'none', cursor: 'pointer' }} key={option} onClick={() => toggleOptionCheck(index)}>
            {optionCheckeds[index] ? "[v] " : "[] "}
            {option}
          </li>
        ))}
      </ul>
    </>
  );
};