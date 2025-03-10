import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null); // used if u want to grab anything from the window

  // it runs the callback as long as their is no change in the dependenciesArray
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // one of the most used hook in react project
  //  useEffect(() => {}, [dependenciesArray]) // it runs the function whenever their is any change in the dependencies Array
  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numberAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };
  return (
    <>
      <div className='  justify-center items-center w-full max-w-md shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3 '>Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden'>
          <input
            type='text'
            value={password}
            className='outline-none w-full px-3 py-1 '
            placeholder='Password'
            readonly
            ref={passwordRef}
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-start gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              name=''
              id=''
            />
            <label htmlFor='length'>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              name=''
              id=''
            />
            <label htmlFor='number'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              name=''
              id=''
            />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
