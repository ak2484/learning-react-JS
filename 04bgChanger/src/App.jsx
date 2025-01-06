import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            className=' outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "red" }}
            // onClick={() => changeColor("red")}
            // or
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className=' outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "green" }}
            // onClick={() => changeColor("green")}
            // or
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className=' outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "blue" }}
            // onClick={() => changeColor("blue")}
            // or
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className=' outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className=' outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className=' outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className=' outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "maroon" }}
            onClick={() => setColor("maroon")}
          >
            Maroon
          </button>
          <button
            className=' outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >
            Lavender
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
