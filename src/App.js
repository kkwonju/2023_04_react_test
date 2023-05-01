import React, { useState } from "react";
import Order from "./Order";

function App() {
  const fruits = ["사과", "바나나", "딸기"];
  const [selecteds, setSelecteds] = useState(new Array(fruits.length).fill(true));
  const selectedsFruits = selecteds.map((el, index) => el ? fruits[index] : el).filter((el) => el);
  const toggleFruitSelected = (index) => {
    const newSelecteds = selecteds.map((el, _index) =>
      _index == index ? !el : el);
    setSelecteds(newSelecteds);
  }

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                onChange={() => toggleFruitSelected(index)}
                checked={selecteds[index]}
              />
              {fruit}
            </label>
          </li>
        ))}
      </ul>
      
      <div>
        선택 상태 : {selecteds.join(',')}
        <hr />
        선택 과일 : {selectedsFruits.join(',')}
      </div>


      {/* <Order/> */}
    </>
  );
};

export default App;