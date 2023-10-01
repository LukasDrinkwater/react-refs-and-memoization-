import { useState, useMemo, memo, useCallback } from "react";

const ButtonComponent2 = memo(({ children, onClick }) => {
  let i = 0;
  let j = 0;
  const ITERATION_COUNT = 10_000;
  while (i < ITERATION_COUNT) {
    while (j < ITERATION_COUNT) {
      j += 1;
    }
    i += 1;
    j = 0;
  }

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
});

function Counter() {
  const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount((prevState) => prevState + 1);
  // };

  const handleClick = useMemo(
    // first arrow function is useMemo's callback
    // second arrow function is our function that will be called later, this one is
    //  going to be the cached value and what's going to be stored in `handleClick`
    () => () => setCount((prevState) => prevState + 1),
    []
  );

  const handleClick2 = useCallback(
    () => setCount((prevState) => prevState + 1),
    []
  );

  return (
    <div>
      <h1>{count}</h1>
      <ButtonComponent2 onClick={handleClick}>Click me!</ButtonComponent2>
    </div>
  );
}

export { Counter };
