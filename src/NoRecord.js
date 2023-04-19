import React, { useState, useRef } from "react";

export default function NoRecord() {
  const [recordedNos, setRecordedNos] = useState([]);
  const noInputRef = useRef(null);

  // (e) => { e.preventDefault(); ...
  const saveNo = (form) => {
    form.no.value = form.no.value.trim();
    if (form.no.value.length == 0) {
      alert('숫자를 입력해주세요');
      noInputRef.current.focus();
      return;
    }
    setRecordedNos([...recordedNos, form.no.value]);
    form.no.value = '';
    noInputRef.current.focus();
  };
  // const li = [1,2,3].map((el, index) => <li key={index}>{el}</li>);
  const li = recordedNos.map((el, index) => <li key={index}>{el},</li>);

  return (
    <>
      <form
          onSubmit={(e) => {
          e.preventDefault();
          saveNo(e.target);
        }}
      >
        <input
          ref={noInputRef}
          type="number"
          name="no"
          placeholder="숫자"
        />
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