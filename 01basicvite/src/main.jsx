import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const reactElement = {
  type: "a",
  props: {
    herf: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom react app</h1>
    </div>
  );
}

const anotherElement = (
  <a herf='https://google.com' target='_blank'>
    Vist Google
  </a>
);

// language that react understand
const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);
createRoot(document.getElementById("root")).render(
  <App />
  //   <MyApp />
  //   anotherElement
  //   reactElement  // will not work as react donot understand the object
  //   areactElement
);
