import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    // return "-1" (concept of baching => react bunddles everything together)
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);

    // return "-4" from the counter (to avoid batching we use callBacks)
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
