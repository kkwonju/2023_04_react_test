import React, { useState, useMemo, useCallback } from "react";

// 하위 컴포넌트
function OrderMainFood({ mainFoodCount, setMainFoodCount }) {
  return (
    <>
      <h2 style={{ fontSize: "1.5em" }}>메인 (수량 : {mainFoodCount})</h2>
      <div>
        <button className="btn" onClick={() => setMainFoodCount(mainFoodCount + 1)}>
          증가
        </button>
        <button className="btn" onClick={() => setMainFoodCount(mainFoodCount == 1 ? 1 : mainFoodCount - 1)}>
          감소
        </button>
      </div>
    </>
  );
};

const MemoizedMainFood = React.memo(OrderMainFood);

// 하위 컴포넌트
function OrderOptions({ options, selectedCount, optionCheckeds, toggleAllChecked, toggleOptionCheck, btnAllChecked }) {
  return (
    <>
      <h2 style={{ fontSize: "1.5em" }}>
        옵션 ({selectedCount} / {options.length})
      </h2>

      <label >
        <input type="checkbox" checked={btnAllChecked} onChange={toggleAllChecked} />
        전체선택
      </label>

      <ul>
        {options.map((option, index) => (
          <li style={{ userSelect: 'none', cursor: 'pointer' }} key={option}>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={optionCheckeds[index]}
                onChange={() => toggleOptionCheck(index)} />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

const MemoizedOrderoptions = React.memo(OrderOptions);

function OrderDelivery({ deliveryType, setDeliveryType }) {
  return (
    <>
      <h2>배달옵션</h2>
      <label>
        <input type="radio" name="delivery-type" checked={deliveryType == '직접수령'} onChange={() => setDeliveryType('직접수령')} />
      </label>
      직접수령
      <label>
        <input type="radio" name="delivery-type" checked={deliveryType == '배달'} onChange={() => setDeliveryType('배달')} />
      </label>
      배달
    </>
  )
}

const MemoizedOrderDelivery = React.memo(OrderDelivery);

// 메인 함수 관리자 , 상위 컴포넌트
export default function Order() {
  const [mainFoodCount, setMainFoodCount] = useState(1);
  const options = [
    "사이다 1.5",
    "밀키스 1.5",
    "코카콜라 1.5",
    "마운틴 듀 750",
    "웰치스 750",
    "닥터페퍼 350",
    "카스 500",
    "하이네켄 500",
  ];

  // [false, false, false, false, false, false]
  // [,,,,,,].fill(false) 
  // new Array(6).fill(false)

  const [optionCheckeds, setOptionCheckeds] = useState(
    new Array(options.length).fill(false)
  );

  const toggleOptionCheck = useCallback((index) => {
    const newOptionCheckeds = optionCheckeds.map((el, _index) => _index == index ? !el : el);
    setOptionCheckeds(newOptionCheckeds);
  }, [optionCheckeds]);

  const toggleAllChecked = useCallback(() => {
    if (btnAllChecked) {
      // 전부 체크 해제
      const newOptionCheckeds = optionCheckeds.map((el) => false);
      setOptionCheckeds(newOptionCheckeds);
    } else {
      // 전부 체크
      const newOptionCheckeds = optionCheckeds.map((el) => true);
      setOptionCheckeds(newOptionCheckeds);
    }
  }, [optionCheckeds]);

  const btnAllChecked = useMemo(
    () => optionCheckeds.every((el) => el),
    [optionCheckeds]);
  const selectedCount = useMemo(
    () => optionCheckeds.filter((el) => el).length,
    [optionCheckeds]);

  const [deliveryType, setDeliveryType] = useState('직접수령');

  return (
    <>
      <h2 style={{ fontSize: "2em" }}>음식주문</h2>

      <MemoizedMainFood
        mainFoodCount={mainFoodCount}
        setMainFoodCount={setMainFoodCount}
      />

      <MemoizedOrderoptions
        options={options}
        btnAllChecked={btnAllChecked}
        selectedCount={selectedCount}
        optionCheckeds={optionCheckeds}
        toggleAllChecked={toggleAllChecked}
        toggleOptionCheck={toggleOptionCheck}
      />

      <MemoizedOrderoptions
        options={options}
        btnAllChecked={btnAllChecked}
        selectedCount={selectedCount}
        optionCheckeds={optionCheckeds}
        toggleAllChecked={toggleAllChecked}
        toggleOptionCheck={toggleOptionCheck}
      />

      <MemoizedOrderDelivery 
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
      />
    </>
  );
};