import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  let newArr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>
        Vite with TailwindCss
      </h1>
      <Card username='Sahil' post='Staff Engineer, Algolia' />
      <Card username='Jason' post='nulla' />
      <Card myArr={newArr} />
    </>
  );
}

export default App;
