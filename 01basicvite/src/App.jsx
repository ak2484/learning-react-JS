import Youtube from "./Youtube";

function App() {
  const username = "Akash";
  return (
    <>
      <h1>Hello React vite react app {2 * 2} </h1>
      <h1>
        Hello React vite {"    "}react app {username}
      </h1>
      <Youtube />
    </>
  );
}

export default App;
