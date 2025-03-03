import Youtube from "./Youtube";
import { useEffect, useState, useCallback, useRef } from "react";

function App() {
  //   const username = "Akash";
  //   return (
  //     <>
  //       <h1>Hello React vite react app {2 * 2} </h1>
  //       <h1>
  //         Hello React vite {"    "}react app {username}
  //       </h1>
  //       <Youtube />
  //     </>
  //   );
  // }

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.select(); // Focuses the input field
  };

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Type something...' />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
