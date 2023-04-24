import { useState, useRef } from "react";

export default function RefEx() {
  const noInputRef = useRef(null);
  const [no, setNo] = useState("");

  const [recordedNos, setRecordedNos] = useState([5, 10, 15, 20, 5, 20, 10, 5]);

  const saveNo = () => {
    if (no === "") {
      alert("숫자를 입력해주세요.");
      return;
    }

    setRecordedNos([...recordedNos, no]);
    setNo("");
  };

  const removeNo = (index) => {
    const newRecordedNos = recordedNos.filter((el, _index) => _index != index);
    setRecordedNos(newRecordedNos);
  }


  const li = recordedNos.map((el, index) => <li key={index}>{el}</li>);

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
          value={no}
          onChange={(e) => setNo(e.target.valueAsNumber)}
        />
        <button className="btnn" type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자 v1</h1>
      {recordedNos.join(",")}

      <hr />
      <button className="btnn" onClick={() => removeNo(0)}>Index 0 Del</button>
      <button className="btnn" onClick={() => removeNo(1)}>Index 1 Del</button>
      <button className="btnn" onClick={() => removeNo(2)}>Index 2 Del</button>
      <button className="btnn" onClick={() => removeNo(3)}>Index 3 Del</button>
    </>
  );
}