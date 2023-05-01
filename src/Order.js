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

  return (
    <>
      <h1>음식 주문</h1>
      <ul>
        {options.map((option, index) => (
          <li style={{ userSelect: 'none' , cursor: 'pointer'}} key={option} onClick={() => toggleOptionCheck(index)}>
            {optionCheckeds[index] ? "[v] " : "[] "}
            {option}
          </li>
        ))}
      </ul>
    </>
  );
};