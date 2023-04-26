import React, { useEffect, useState } from "react";

let AppCallCount = 0;

function App() {
  AppCallCount++;
  console.log(`AppCallCount : ${AppCallCount}`);

  const [no, setNo] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <div>
        <button className="btn btn-outline" onClick={() => setNo(no + 1)}>
          App 버튼 : {no}
        </button>
        <button className="btn btn-outline" onClick={() => setIsDark(!isDark)}>
          테마 토글
        </button>

        <hr />

        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptate ut illum esse optio fuga, aut quos voluptas fugiat maxime, eveniet laboriosam eius harum reiciendis iure incidunt similique quis deleniti.
        </div>
        <h1 className="color-primary">Hello, Nice to meet you</h1>
      </div>
    </>
  );
}

export default App;