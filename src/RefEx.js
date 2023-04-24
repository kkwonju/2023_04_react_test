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

  const removeNo5 = () => {
    const newRecordedNos = recordedNos.filter((el) => el != 5);
    setRecordedNos(newRecordedNos);
  }

  const removeFirst = () => {
    setRecordedNos(recordedNos.filter((_, index) => index != 0));
  }
  const removeLast = () => {
    setRecordedNos(recordedNos.filter((_, index) => index != recordedNos.length - 1));
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
        <button type="submit">기록</button>
      </form>

      <hr />

      <h1>기록된 숫자 v1</h1>
      {recordedNos.join(",")}

      <hr />
      <button onClick={removeNo5}>숫자 5 제거</button>
      <button onClick={removeFirst}>첫 숫자 제거</button>
      <button onClick={removeLast}>마지막 숫자 제거</button>
    </>
  );
}