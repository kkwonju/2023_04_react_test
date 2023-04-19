import React, { useState } from "react";

export default function NoRecord() {
  const [no, setNo] = useState(0);
  const [recordedNos, setRecordedNos] = useState([]);

  const saveNo = () => {
    setRecordedNos([...recordedNos, no]);
  };

  return (
    <>
      <input
        type="number"
        value={no}
        onChange={(e) => setNo(e.target.valueAsNumber)} />
      <button type="button" onClick={saveNo}>기록</button>
      <hr />
      기록된 숫자 : [{recordedNos.join(",")}]
    </>
  );
}