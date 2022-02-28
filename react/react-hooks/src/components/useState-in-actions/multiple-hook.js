import { useState } from 'react'

export default function MultipleHook () {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  function decrement () {
    setCount(prevState => prevState - 1)
    setTheme('red')
  }

  function increment () {
    setCount(prevState => prevState + 1)
    setTheme('blue')
  }


  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <h2>{theme}</h2>
    </>
  )
}