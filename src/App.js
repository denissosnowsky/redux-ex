import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let value = useSelector((x) => x.maPage.name)
  const dispatch = useDispatch();

  console.log(value)

  const onChange = (e) => {
    dispatch({ type: "NAME", payload:  e.target.value});
  };

  return (
    <div className="App">
      <input value={value} onChange={onChange}
      />
    </div>
  );
}

export default App;
