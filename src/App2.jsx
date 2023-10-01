import { useMemo, useState } from "react";

function App2() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const expensiveFunction = (num) => {
    let total = 0;
    for (let i = 1; i < num; i++) {
      total += i;
    }
    return total;
  };

  const sum = expensiveFunction();

  const sum2 = useMemo(() => expensiveFunction(number), [number]);

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
      />
      <input
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        type="number"
      />
      <span>total {sum2}</span>
    </div>
  );
}

export { App2 };
