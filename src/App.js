import React, { useState } from "react";
import classNames from 'https://cdn.skypack.dev/classnames';

function NotifyOnce({ children }) {
  const [visible, setVisible] = useState(false);
  const [wordDone, setWorkDone] = useState(false);

  if(wordDone == false){
    setTimeout(function() {
      setVisible(true);
    }, 1000);

    setTimeout(function() {
      setVisible(false);
    }, 3000);

    setWorkDone(true);
  }
  return (
    <>
      <div className={classNames(
        "fixed transition-all right-[10px]",
        {
          "top-[-60px]": !visible,
        },
        {
          "top-[10px]": visible,
        }
      )}
      >
        {children}
      </div>
    </>
  )
}

function Alert({ color: _color, children }) {
  const color = _color ?? "white";
  return (
    <div className="alert alert-success shadow-lg">
      <div className={`text-${color}`}>
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span>{children}</span>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <NotifyOnce>
        <Alert>안녕하세요</Alert>
      </NotifyOnce>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas facere nulla sint
        voluptates perspiciatis est doloremque incidunt exercitationem, unde amet quasi corporis
        aperiam nihil excepturi, quaerat nesciunt. Fugiat, reiciendis modi!
      </div>
    </>
  );
}

export default App;