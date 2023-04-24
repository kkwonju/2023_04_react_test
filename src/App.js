function Alert({color: _color, children}) {
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
      <Alert>Hello</Alert>
      <hr className="my-4" />
      <Alert color="pink-500">Bye</Alert>
    </>
  );
}

export default App;