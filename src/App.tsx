import { useState, ChangeEvent } from 'react'
import { formula } from './utils/formula';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("")
  const ans = formula(userInput);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }

  return (
    <>
      <h1>1+2-3+4-5+6-.....+ 或 -  N</h1>
      <input onChange={handleChange} value={userInput} />
      <h2>{`所求 = ${ans}`}</h2>
    </>
  )
}


export default App
