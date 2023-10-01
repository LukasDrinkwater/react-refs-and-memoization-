import { useState, useRef, useEffect } from "react";
import "./App.css";
import "../src/styles/reset.css";

import ButtonComponent from "./ButtonComponent";
import { Counter } from "./ButtonComponent2";
import { render } from "@testing-library/react";

// using a ref doesnt make the component rerender when it is updated

const App = () => {
  const [name, setName] = useState("");
  // const renderCount = useRef(0);
  const prevName = useRef("");

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  // function focus() {
  //   inputRef.current.focus();
  //   inputRef.current.value = "some value";
  // }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it was {prevName.current}
      </div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default App;
