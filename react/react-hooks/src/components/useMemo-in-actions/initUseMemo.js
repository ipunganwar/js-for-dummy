import { useState } from "react";

export default function InitUseMemo () {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = slowFunction(number)

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'black' : 'white'
  }

  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )

  function slowFunction (num) {
    console.log('Calling slow fint')
    for (let i=0; i < 100000000; i++) {}
    return num * 2
  }
}
