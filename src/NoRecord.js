import React, { useState } from "react";

export default function NoRecord() {
  const [no, setNo] = useState('');
  const [recordedNos, setRecordedNos] = useState([]);

  const saveNo = () => {

    // (e) => { e.preventDefault(); ...

    if (no === '') {
      alert('숫자를 입력해주세요');
      return;
    }
    setRecordedNos([...recordedNos, no]);
    setNo('');
  };
  // const li = [1,2,3].map((el, index) => <li key={index}>{el}</li>);
  const li = recordedNos.map((el, index) => <li key={index}>{el},</li>);

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        saveNo();
        }}>
        <input
          type="number"
          value={no}
          placeholder={0}
          onChange={(e) => setNo(e.target.valueAsNumber)} />
        <button type="submit" className="border border-black-500">
          기록
        </button>
      </form>
      {/* 버전 1 */}
      <hr />
      <h1>기록된 숫자 v1</h1>
      기록된 숫자 : [{recordedNos.join(",")}]

      {/* 버전 2 */}
      <hr />
      <h1>기록된 숫자 v2_1</h1>
      <ul className="flex">{li}</ul>

      {/* 버전 3 */}
      <hr />
      <h1>기록된 숫자 v3</h1>
      <ul className="flex">
        {recordedNos.map((el, index) => (
          <li key={index}>{el},</li>
        ))}
      </ul>



    </>
  );
}