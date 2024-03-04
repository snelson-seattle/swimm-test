import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div>
      <Button text={"+"} onClick={increment} />
      <span>{count}</span>
      <Button text={"-"} onClick={decrement} />
    </div>
  );
};

export default Counter;
