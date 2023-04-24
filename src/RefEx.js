import { useState, useRef } from "react";

export default function RefEx() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([
    5,
    10,
    15,
    20,
    5,
    25,
    5,
    30,
    5
  ]);

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
    noInputRef.current.focus();
  };

  const removeNo = (index) => {
    const newRecordedNos = recordedNos.filter((_, _index) => _index != index);
    setRecordedNos(newRecordedNos);
  };

  const modifyNo = (index, newNo) => {
    const newRecordedNos = recordedNos.map((el, _index) => _index == index ? newNo : el);
    setRecordedNos(newRecordedNos);
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveNo();
        }}
      >
        <input
          type="number"
          ref={noInputRef}
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        />
        <button type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자</h1>
      <ul>
        {recordedNos.map((el, index) => (
          <li key={index}>
            <span style={{ width: 70, display: 'inline-block' }}>{el}</span>
            <span style={{ width: 70, display: 'inline-block' }}>{index}</span>
            <button className="btnn" onClick={() => removeNo(index)}>삭제</button>
            <button className="btnn" onClick={() => modifyNo(index, el + 1)}>+1</button>
            <button className="btnn" onClick={() => modifyNo(index, el - 1)}>-1</button>
            <button className="btnn" onClick={() => modifyNo(index, 0)}>0</button>
          </li>
        ))}
      </ul>
    </>
  );
}